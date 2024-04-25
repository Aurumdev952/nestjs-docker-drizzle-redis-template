import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import zod from 'zod';
import { AppConfigService } from './configration.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: zod.object({
        APP_NAME: zod.string(),
        APP_ENV: zod
          .enum(['development', 'production', 'testing', 'staging'])
          .default('development'),
        APP_URL: zod.string(),
        APP_PORT: zod.number().default(5000),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
