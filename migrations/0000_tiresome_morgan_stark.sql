CREATE TABLE `favorite_messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`message_id` text NOT NULL,
	`user_id` text NOT NULL,
	`chat_between` text NOT NULL,
	`message_content` text,
	`message_timestamp` text
);
--> statement-breakpoint
CREATE TABLE `guestbook` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `task` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`completed` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `user_pincodes` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`pincode` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `favorite_messages_message_id_unique` ON `favorite_messages` (`message_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_pincodes_user_id_unique` ON `user_pincodes` (`user_id`);