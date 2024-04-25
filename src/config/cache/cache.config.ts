import { registerAs } from '@nestjs/config';
export default registerAs('cache', () => ({
  redis_url: process.env.REDIS_URL,
}));
