# WhatsApp Chat Export to SQL Conversion

This guide will walk you through the process of exporting a WhatsApp chat and converting it into a SQL format using Turso. Follow these steps to ensure a smooth conversion:

## Steps to Convert WhatsApp Chat to SQL

### 1. Export WhatsApp Chat

1. Open WhatsApp and navigate to the individual chat you want to export.
2. Tap on the chat's name at the top to open chat information.
3. Select "Export Chat" and choose whether you want to include media or not.
4. Save the exported `.txt` file to your computer.

### 2. Convert `.txt` to JSON Format

1. Use the `convert-to-proper-structure.py` script to convert the exported `.txt` file into SQLite format.
2. Run the script using the command:

    `python src/core/scripts/txt-to-sql.py`

### 3. Verify Skweel Format

1. Ensure that the sql file format conforms to the `data.json` schema provided below:

    ```sql
   CREATE TABLE IF NOT EXISTS chats (
    name TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    user_name TEXT NOT NULL,
    last_active TEXT NOT NULL,
    admin_only INTEGER
);

CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    chat_name TEXT NOT NULL,
    sender TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    type TEXT NOT NULL,
    is_favourited INTEGER
);

INSERT OR IGNORE INTO chats (name, user_id, user_name, last_active, admin_only) VALUES ('chat_EXPORTEDNAME', 'EXPORTEDNAME', 'EXPORTEDNAME', '2024-07-23T22:19:06.386164', 0);

INSERT INTO messages (id, chat_name, sender, content, timestamp, type, is_favourited) VALUES ('ce7e1bd4-fcd8-46b2-a60d-e4f71c20ec6f', 'chat_EXPORTEDNAME', 'YOUR NAME', 'A whatsapp message', '2015-11-23T23:22:30', 'text', NULL);
    ```


### 4. Set Up Turso

1. Ensure you have Turso set up with your tables.
2. Run the following commands to generate and migrate your schema:

    ```pnpm drizzle-kit generate```

    ```pnpm drizzle-kit migrate```

    ```pnpm drizzle-kit push```


### 6. Seed the Database

1. Log in to the Turso CLI:

    ```turso db shell <yourndbname>```

    Replace `<yourndbname>` with your database name.

2. Copy and paste the output of the SQL conversion script into the Turso CLI to seed the database tables.

### 7. Done!

You have successfully converted your WhatsApp chat into a SQL format and seeded your database with the chat data. Enjoy!
