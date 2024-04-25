import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get database_url(): string {
    return (
      this.configService.get<string>('database.database_url', {
        infer: true,
      }) ?? ''
    );
  }
}
