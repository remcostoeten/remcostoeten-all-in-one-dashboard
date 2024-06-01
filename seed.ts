import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";
import { todoSchema } from "src/core/db-models";

// Initialize the database client
const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
});

// Initialize Drizzle
const db = drizzle(client);

// Seed function
async function seedTodos() {
  const todos = [];
  for (let i = 0; i < 10; i++) {
    todos.push({
      title: `Task ${i + 1}`,
      link: `http://example.com/task${i + 1}`,
      description: `Description for task ${i + 1}`,
      completed: Math.round(Math.random()), // random boolean value 0 or 1
    });
  }

  await db.insert(todoSchema).values(todos);
}

// Run the seed function
seedTodos()
  .then(() => {
    console.log("Seeded 10 todos");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding todos:", error);
    process.exit(1);
  });
