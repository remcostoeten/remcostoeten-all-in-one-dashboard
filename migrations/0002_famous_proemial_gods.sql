CREATE TABLE `favorite_messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`message_id` text NOT NULL,
	`user_id` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `task` DROP COLUMN `link`;--> statement-breakpoint
ALTER TABLE `task` DROP COLUMN `username`;