import { Command, Flags } from '@oclif/core';
import { init, login } from '../api.js';

export default class Login extends Command {
  static description = 'Authenticate to rivian.com using GraphQL';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    email: Flags.string({ char: 'e', description: 'Email', required: true }),
    password: Flags.string({ char: 'p', description: 'Password', required: true }),
  };

  public async run(): Promise<void> {
    await init(); // Call init function before executing any commands
    
    const { flags } = await this.parse(Login);

    try {
      const response = await login(flags.email, flags.password);
      // Do something with the successful response
      this.log('Successfully logged in');
    } catch (error) {
      this.error(`Failed to fetch charging history: ${error instanceof Error ? error.message : error}`);
    }
  }
}
