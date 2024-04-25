import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheConfigService {
  constructor(private configService: ConfigService) {}

  get redis_url(): string {
    return (
      this.configService.get<string>('cache.redis_url', { infer: true }) ?? ''
    );
  }
}
