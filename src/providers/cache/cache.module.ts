import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { CacheConfigService } from 'src/config/cache/cache.config.service';

@Module({
  imports: [
    RedisModule.forRootAsync({
      inject: [CacheConfigService],
      useFactory(config: CacheConfigService) {
        return {
          config: {
            name: 'CACHE',
            url: config.redis_url,
          },
        };
      },
    }),
  ],
})
export class CacheModule {}
