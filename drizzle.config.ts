import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
    driver: 'turso',
    out: './migrations',
    schema: './src/core/models/Schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: 'libsql://all-in-one-dashboard-remcostoeten.turso.io',
        authToken:
            'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjEzNDEzNzYsImlkIjoiNWE4N2NmNTgtY2RmYi00ZDBjLWI3NWEtZGE0NzBiOWE5OTgxIn0.0axiZEHj1ekTLw1B_LcKeJqBVj3o3shvDgXC46NYnKSCt4sYyfOCPdLUBrnrhq5uCm0Huog0_gpRM-PG6w5xBQ'
    },
    verbose: true
} satisfies Config
