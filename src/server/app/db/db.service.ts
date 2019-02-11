import { Injectable } from '@nestjs/common';
import { consoleLogger as scribe } from 'mc-scribe';
import { Pool } from 'pg';

@Injectable()
export class DbService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });
  }

  async query<T>(text: string, params: any[]): Promise<T[]> {
    const qStart = Date.now();
    text = text.replace(/\n\s*,/g, ', ').replace(/\n\s*/g, ' ');
    try {
      const queryRes = await this.pool.query(text, params);
      scribe('DEBUG', {
        text,
        duration: Date.now() - qStart + ' ms',
        rows: queryRes.rowCount
      });
      return queryRes.rows;
    } catch (err) {
      scribe('ERROR', err.message);
      scribe('DEBUG', {
        text,
        duration: Date.now() - qStart + ' ms'
      });
      scribe('FINE', err.stack);
      return [];
    }
  }
}
