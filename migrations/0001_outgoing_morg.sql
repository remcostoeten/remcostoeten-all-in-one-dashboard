CREATE TABLE `salary_calculations` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`employer_name` text NOT NULL,
	`gross_salary` integer NOT NULL,
	`net_salary` integer NOT NULL,
	`hours_per_week` integer NOT NULL,
	`travel_allowance` integer,
	`vacation_money` integer,
	`yearly_increase` text,
	`is_remote` integer,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
