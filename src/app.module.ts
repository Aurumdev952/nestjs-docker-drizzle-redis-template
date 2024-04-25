import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './api/health/health.controller';
import { HealthModule } from './api/health/health.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/app/configuration';
import cacheConfig from './config/cache/cache.config';
import databaseConfig from './config/database/database.config';
import { CacheModule } from './providers/cache/cache.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    CacheModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [databaseConfig, cacheConfig, configuration],
    }),
    HealthModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
