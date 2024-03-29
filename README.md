rivian.cli
=================

A command line interface (CLI) for interacting and extracting vehicle data from Rivian's Cloud API

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rivian-cli
$ rivian COMMAND
running command...
$ rivian (--version)
rivian-cli/0.0.0 darwin-x64 node-v20.11.1
$ rivian --help [COMMAND]
USAGE
  $ rivian COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rivian charging`](#rivian-charging)
* [`rivian login`](#rivian-login)

## `rivian charging`

Fetch charging history of a Rivian vehicle

```
USAGE
  $ rivian charging -v <value> [-o <value>]

FLAGS
  -o, --output=<value>     [default: json] output format (json or csv)
  -v, --vehicleId=<value>  (required) vehicle ID

DESCRIPTION
  Fetch charging history of a Rivian vehicle

EXAMPLES
  $ rivian charging
```

_See code: [src/commands/charging.ts](https://github.com/tmack8001/rivian-cli/blob/v0.0.0/src/commands/charging.ts)_

## `rivian login`

Authenticate to rivian.com using GraphQL

```
USAGE
  $ rivian login -e <value> -p <value>

FLAGS
  -e, --email=<value>     (required) Email
  -p, --password=<value>  (required) Password

DESCRIPTION
  Authenticate to rivian.com using GraphQL

EXAMPLES
  $ rivian login
```

_See code: [src/commands/login.ts](https://github.com/tmack8001/rivian-cli/blob/v0.0.0/src/commands/login.ts)_
<!-- commandsstop -->
