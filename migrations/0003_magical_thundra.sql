CREATE TABLE `user_pincodes` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`pincode` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `favorite_messages` ADD `znew` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `user_pincodes_user_id_unique` ON `user_pincodes` (`user_id`);