import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const guestbookSchema = sqliteTable('guestbook', {
  id: integer('id').primaryKey(),
  username: text('username').notNull(),
  body: text('body').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export const taskSchema = sqliteTable('task', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  completed: integer('completed').notNull().default(0), // Default to 0 (false)
  createdAt: integer('created_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});