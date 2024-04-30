import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DatabaseConfigService } from 'src/config/database/database.config.service';
import * as schema from './schema';
import { DrizzleService } from './database.service';
const databaseProvider = {
  provide: 'DB',
  useFactory: async (config: DatabaseConfigService) => {
    const primaryDb = drizzle(
      new Pool({
        connectionString: config.database_url,
      }),
      {
        schema,
      },
    );
    // seed labels
    // primaryDb
    //   .insert(schema.user)
    //   .values(labels)
    //   .onConflictDoNothing()
    //   .catch((err) => console.error(err));

    return primaryDb;
  },
  inject: [DatabaseConfigService],
};

@Module({
  providers: [databaseProvider],
  exports: ['DB', DrizzleService],
})
export class DatabaseModule {}
