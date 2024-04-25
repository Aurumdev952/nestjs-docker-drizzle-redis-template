import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import zod from 'zod';
import { DatabaseConfigService } from './database.config.service';
import configuration from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: zod.object({
        DATABASE_URL: zod.string(),
      }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
