# WhatsApp Chat Export to SQL Conversion

This guide will walk you through the process of exporting a WhatsApp chat and converting it into a SQL format using Turso. Follow these steps to ensure a smooth conversion:

## Steps to Convert WhatsApp Chat to SQL

### 1. Export WhatsApp Chat
1. Open WhatsApp and navigate to the individual chat you want to export.
2. Tap on the chat's name at the top to open chat information.
3. Select "Export Chat" and choose whether you want to include media or not.
4. Save the exported `.txt` file to your computer.

### 2. Convert `.txt` to JSON Format
1. Use the `convert-to-proper-structure.py` script to convert the exported `.txt` file into JSON format.
2. Run the script using the command:

   @`@`@`python convert-to-proper-structure.py input.txt output.json`@`@`@

   Replace `input.txt` with the path to your exported text file and `output.json` with the desired output JSON file name.

### 3. Verify JSON Format
1. Ensure that the JSON file format conforms to the `data.json` schema provided below:

   ```json
   {
       "userId": "john123",
       "userName": "John Doe",
       "lastActive": "2024-07-18T14:30:00Z",
       "messages": [
           {
               "id": "msg1",
               "sender": "john123",
               "content": "Hey, how's it going?",
               "timestamp": "2024-07-18T10:00:00Z",
               "type": "text"
           },
           {
               "id": "msg2",
               "sender": "alice456",
               "content": "Hi John! I'm doing well, thanks. How about you?",
               "timestamp": "2024-07-18T10:05:00Z",
               "type": "text"
           }
       ]
   }

2. Adjust the JSON structure if necessary to match the schema. (I sure hope not for you, otherwise just ask AI to convert to needed schema from Schema.ts).

### 4. Set Up Turso
1. Ensure you have Turso set up with your tables.
2. Run the following commands to generate and migrate your schema:

   @`@`@`pnpm drizzle-kit generate`@`@`@

   @`@`@`pnpm drizzle-kit migrate`@`@`@

   @`@`@`pnpm drizzle-kit push`@`@`@

### 5. Convert JSON to SQL
1. Use the `convert-json-to-sql.py` script to convert your JSON file into SQL format.
2. Run the script using the command:

   @`@`@`python convert-json-to-sql.py output.json schema.sql`@`@`@

   Replace `output.json` with the path to your JSON file and `schema.sql` with the desired SQL file name.

### 6. Seed the Database
1. Log in to the Turso CLI:

   @`@`@`turso db shell <yourndbname>`@`@`@

   Replace `<yourndbname>` with your database name.

2. Copy and paste the output of the SQL conversion script into the Turso CLI to seed the database tables.

### 7. Done!
You have successfully converted your WhatsApp chat into a SQL format and seeded your database with the chat data. Enjoy!
