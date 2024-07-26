CREATE TABLE `text_comparisons` (
	`id` integer PRIMARY KEY NOT NULL,
	`list_a` text NOT NULL,
	`list_b` text NOT NULL,
	`result` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
DROP TABLE `salary_calculations`;--> statement-breakpoint
DROP TABLE `users`;