import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
import { LocalStorage } from 'node-localstorage';


const hostname = 'https://rivian.com';
const graphqlPath = '/api/gql/gateway/graphql';

let csrfToken: string
let appSessionToken: string
let accessToken: string
let refreshToken: string
let userSessionToken: string

let localStorage: LocalStorage

// Load session state variables from storage
export async function init() {
  // Initialize local storage with a reference to the directory
  localStorage = new LocalStorage('./.secrets');
  loadSessionState();
}

// Load session state variables from local storage
const loadSessionState = () => {
  csrfToken = localStorage.getItem('csrfToken') || '';
  appSessionToken = localStorage.getItem('appSessionToken') || '';
  accessToken = localStorage.getItem('accessToken') || '';
  refreshToken = localStorage.getItem('refreshToken') || '';
  userSessionToken = localStorage.getItem('userSessionToken') || '';
};

// Save session state variables to local storage
const saveSessionState = () => {
  localStorage.setItem('csrfToken', csrfToken);
  localStorage.setItem('appSessionToken', appSessionToken);
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('userSessionToken', userSessionToken);
};

async function executeGraphQLQuery(path: string, query: string, variables?: Record<string, any>, isLoginCommand: boolean = false, csrfTokenRequired: boolean = true) {
  if (csrfTokenRequired) {
    await createCsrfToken();
  }

  const body = JSON.stringify({ query, variables });
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Apollographql-Client-Name': 'com.rivian.ios.consumer-apollo-ios',
  };

  if (csrfToken) {
    headers['Csrf-Token'] = csrfToken;
  }

  if (appSessionToken) {
    headers['A-Sess'] = appSessionToken;
  }

  if (userSessionToken) {
    headers['U-Sess'] = userSessionToken;
  }

  if (isLoginCommand) {
    headers['Dc-Cid'] = `m-ios-${uuidv4()}`;
  }

  return await fetch(`${hostname}${path}`, {
    method: 'POST',
    headers,
    body,
  });
}

async function createCsrfToken() {
  const createCsrfTokenQuery = `mutation CreateCSRFToken {
    createCsrfToken {
      __typename
      csrfToken
      appSessionToken
    }
  }`;

  const response = await executeGraphQLQuery(graphqlPath, createCsrfTokenQuery, undefined, false, false);
  const body = await response.json();
  csrfToken = body.data.createCsrfToken.csrfToken;
  appSessionToken = body.data.createCsrfToken.appSessionToken;
  await saveSessionState();
}

export async function login(email: string, password: string) {
  const loginQuery = `mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      ... on MobileLoginResponse {
        __typename
        accessToken
        refreshToken
        userSessionToken
      }
      ... on MobileMFALoginResponse {
        __typename
        otpToken
      }
    }
  }`;

  const variables = { email, password };
  const response = await executeGraphQLQuery(graphqlPath, loginQuery, variables, true);
  
  if (!response.ok) {
    throw new Error(`unknown network error occurred : ${response.status}`);
  }

  const body = await response.json();

  if (body.errors && body.errors.length > 0) {
    const graphqlError = body.errors[0];
    throw new Error(graphqlError.message);
  }

  if (body.data.login.__typename === 'MobileLoginResponse') {
    accessToken = body.data.login.accessToken;
    refreshToken = body.data.login.refreshToken;
    userSessionToken = body.data.login.userSessionToken;
    await saveSessionState();
  }
  
  return body;
}

export async function getLiveSessionHistory(vehicleId: string) {
  const query = `
    query getLiveSessionHistory($vehicleId: ID!) {
      getLiveSessionHistory(vehicleId: $vehicleId) {
        transactionId
        vehicleId
        startTime
        current {
          updatedAt
          value
        }
        chargerId
      }
    }
  `;

  const variables = { vehicleId };

  const response = await executeGraphQLQuery(graphqlPath, query, variables);
  
  if (!response.ok) {
    throw new Error(`unknown network error occurred : ${response.status}`);
  }

  const body = await response.json();
  return body;
}

export async function getCompletedSessionSummaries(vehicleId: string) {
  const query = `
    query getCompletedSessionSummaries($vehicleId: String!) {
      getCompletedSessionSummaries(vehicleId: $vehicleId) {
        __typename
        chargerType
        currencyCode
        paidTotal
        startInstant
        endInstant
        totalEnergyKwh
        rangeAddedKm
        city
        transactionId
        vehicleId
        vehicleName
        vendor
        isRoamingNetwork
        isPublic
        isHomeCharger
        meta {
          __typename
          transactionIdGroupingKey
          dataSources
        }
      }
    }
  `;

  const variables = { vehicleId };

  const response = await executeGraphQLQuery(graphqlPath, query, variables);

  if (!response.ok) {
    throw new Error(`unknown network error occurred : ${response.status}`);
  }

  const body = await response.json();
  return body
}