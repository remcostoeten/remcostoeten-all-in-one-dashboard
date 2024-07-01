// import { createClient } from '@libsql/client';
// import { drizzle } from 'drizzle-orm/libsql';
// import { migrate } from 'drizzle-orm/libsql/migrator';
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

const client = createClient({
    url: process.env.DATABASE_URL,
    /**
     *
     * ToDo:regen auth token and env
     */
    authToken:
        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTk3NTg1OTAsImlkIjoiNWE4N2NmNTgtY2RmYi00ZDBjLWI3NWEtZGE0NzBiOWE5OTgxIn0.Hjmql2gJfmhhol98TL2nMDk1IJkNFjDXuTrJuUBsn9zde-wcboo6P1HEsqMUucS-57M_Zq8s-a_6MYfzH02JBw'
})
export const db = drizzle(client)

// Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
// Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
// Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
// if (process.env.NODE_ENV === 'development') {
//   await migrate(db, { migrationsFolder: './migrations' });
// }
