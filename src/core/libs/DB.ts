// import { createClient } from '@libsql/client';
// import { drizzle } from 'drizzle-orm/libsql';
// import { migrate } from 'drizzle-orm/libsql/migrator';
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

const client = createClient({
    url: 'libsql://topical-the-wasp-remcostoeten.turso.io',
    authToken:
        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjIwNzk1NDYsImlkIjoiMWRhNjMwODEtMDU1NC00MmEyLThmN2UtNDFjN2NlNjJiZjllIn0.jUQYb-deciQi850e2pVogNsbKKprjpl7znM-FXWQwVHZKgZNBYTz-qxtag0DQlRBvJvdxTeJKzh36bpU-jEXCw'
})

const customLogger = {
    logQuery: (query: string, params: unknown[]) => {
        console.log('Query:', query)
        console.log('Params:', params)
    }
}

export const db = drizzle(client, { logger: customLogger })

// Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
// Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
// Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
// if (process.env.NODE_ENV === 'development') {
//   await migrate(db, { migrationsFolder: './migrations' });
// }
