import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
@Injectable()
export class DrizzleService {
  constructor(@Inject('DB') readonly db: PostgresJsDatabase<typeof schema>) {}
}
