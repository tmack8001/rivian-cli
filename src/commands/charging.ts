import { Command, Flags } from '@oclif/core';
import { init, getCompletedSessionSummaries } from '../api.js';
import { Parser } from 'json2csv';

export default class ChargingHistory extends Command {
  static description = 'Fetch charging history of a Rivian vehicle';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    vehicleId: Flags.string({ char: 'v', description: 'vehicle ID' , required: true}),
    output: Flags.string({ char: 'o', description: 'output format (json or csv)', default: 'json', required: false }),
  };

  async run() {
    await init(); // Call init function before executing any commands
    
    const { flags } = await this.parse(ChargingHistory);
    const { vehicleId, output } = flags;

    if (!vehicleId) {
      this.error('Please provide a vehicle ID using --vehicleId flag');
    }

    if (output !== 'json' && output !== 'csv') {
      this.error('Invalid output format. Use "json" or "csv".');
    }

    try {
      const result = await getCompletedSessionSummaries(vehicleId);
      
      if (output === 'csv') {
        // Convert data to CSV format
        const sessions = result.data.getCompletedSessionSummaries

        // let fields = ['chargerType', 'currencyCode', 'startInstant', 'endInstant', 'totalEnergyKwh', 'rangeAddedKm'];
        const parser = new Parser({
          header: true
        });
      
        const csvData = parser.parse(sessions);
        this.log(csvData);
      } else {
        // Output data in JSON format
        this.log(JSON.stringify(result, null, 2));
      }

    } catch (error) {
      this.error(`Failed to fetch charging history: ${error instanceof Error ? error.message : error}`);
    }
  }
}