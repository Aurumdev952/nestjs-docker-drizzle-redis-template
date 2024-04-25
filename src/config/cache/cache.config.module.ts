import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import zod from 'zod';
import configuration from './cache.config';
import { CacheConfigService } from './cache.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: zod.object({
        REDIS_URL: zod.string(),
      }),
    }),
  ],
  providers: [ConfigService, CacheConfigService],
  exports: [ConfigService, CacheConfigService],
})
export class CacheConfigModule {}
