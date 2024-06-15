CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`amount` integer,
	`description` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`category` text
);
--> statement-breakpoint
ALTER TABLE `task` DROP COLUMN `link`;--> statement-breakpoint
ALTER TABLE `task` DROP COLUMN `username`;