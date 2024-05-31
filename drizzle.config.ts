import type { Config } from 'drizzle-kit';

/** @type {import('drizzle-kit').Config} */
export default {
  driver: 'turso',
  out: './migrations',
  schema: './src/models/Schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
} satisfies Config;
