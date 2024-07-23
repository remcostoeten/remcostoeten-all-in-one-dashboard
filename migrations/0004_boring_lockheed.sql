ALTER TABLE `chats` ADD `admin_only` integer;--> statement-breakpoint
ALTER TABLE `users` ADD `id` text PRIMARY KEY NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);