import 'dotenv/config';
import { pgSchema } from 'drizzle-orm/pg-core';
export const myschema = pgSchema('data');
