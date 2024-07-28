import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
    driver: 'turso',
    out: './migrations',
    schema: './src/core/models/Schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: 'libsql://topical-the-wasp-remcostoeten.turso.io',
        authToken:
            'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjIwNzk1NDYsImlkIjoiMWRhNjMwODEtMDU1NC00MmEyLThmN2UtNDFjN2NlNjJiZjllIn0.jUQYb-deciQi850e2pVogNsbKKprjpl7znM-FXWQwVHZKgZNBYTz-qxtag0DQlRBvJvdxTeJKzh36bpU-jEXCw'
    },
    verbose: true
} satisfies Config
