import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const guestbookSchema = sqliteTable('guestbook', {
    id: integer('id').primaryKey(),
    username: text('username').notNull(),
    body: text('body').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    ),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    )
})

export const taskSchema = sqliteTable('task', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    completed: integer('completed').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    ),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    )
})

export const messages = sqliteTable('messages', {
    id: text('id').primaryKey(),
    chatName: text('chat_name').notNull(),
    sender: text('sender').notNull(),
    content: text('content').notNull(),
    timestamp: text('timestamp').notNull(),
    type: text('type').notNull(),

    isFavourited: integer('is_favourited', { mode: 'boolean' })
})

export const chats = sqliteTable('chats', {
    name: text('name').primaryKey(),
    userId: text('user_id').notNull(),
    userName: text('user_name').notNull(),
    lastActive: text('last_active').notNull(),
    adminOnly: integer('admin_only', { mode: 'boolean' })
})

export const usersSchema = sqliteTable('users', {
    id: text('id').primaryKey().unique(),
    email: text('email').notNull().unique(),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    ),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    ),
    isAdmin: integer('is_admin', { mode: 'boolean' })
})

export const textComparisonSchema = sqliteTable('text_comparisons', {
    id: integer('id').primaryKey(),
    listA: text('list_a').notNull(),
    listB: text('list_b').notNull(),
    result: text('result').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    ),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
        sql`(strftime('%s', 'now'))`
    )
})

export const posts = sqliteTable('posts', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    viewCount: integer('view_count').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`)
})
