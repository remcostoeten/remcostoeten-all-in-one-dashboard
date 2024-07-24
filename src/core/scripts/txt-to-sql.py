import re
from datetime import datetime
import uuid

def parse_message(line):
    match = re.match(r'\[(\d{2}/\d{2}/\d{4}, \d{2}:\d{2}:\d{2})\] ([^:]+): (.+)', line)
    if match:
        timestamp, sender, content = match.groups()
        return {
            'timestamp': datetime.strptime(timestamp, '%d/%m/%Y, %H:%M:%S').isoformat(),
            'sender': sender.strip(),
            'content': content.strip()
        }
    return None

def process_chat_history(input_file, output_file):
    chat_name = "chat_Daphne"
    user_name = "Daphne"
    
    with open(output_file, 'w', encoding='utf-8') as out_file:
        # Write create table statements
        out_file.write('''CREATE TABLE IF NOT EXISTS chats (
    name TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    user_name TEXT NOT NULL,
    last_active TEXT NOT NULL,
    admin_only INTEGER
);\n\n''')

        out_file.write('''CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    chat_name TEXT NOT NULL,
    sender TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    type TEXT NOT NULL,
    is_favourited INTEGER
);\n\n''')

        # Insert chat
        out_file.write(f"INSERT OR IGNORE INTO chats (name, user_id, user_name, last_active, admin_only) VALUES ('{chat_name}', '{user_name.lower()}', '{user_name}', '{datetime.now().isoformat()}', 0);\n\n")

        # Process messages
        with open(input_file, 'r', encoding='utf-8') as in_file:
            for line in in_file:
                message = parse_message(line)
                if message:
                    message_id = str(uuid.uuid4())
                    sql = f"""INSERT INTO messages (id, chat_name, sender, content, timestamp, type, is_favourited) VALUES ('{message_id}', '{chat_name}', '{message['sender']}', '{message['content'].replace("'", "''")}', '{message['timestamp']}', 'text', NULL);\n"""
                    out_file.write(sql)

# Usage
input_file = '/home/remcostoeten/development/remcostoeten-all-in-one-dashboard/src/core/scripts/data.txt'
output_file = 'queries.txt'
process_chat_history(input_file, output_file)
print(f"Conversion complete. SQL commands saved in {output_file}")

# Optional: Copy to clipboard
try:
    import pyperclip
    with open(output_file, 'r', encoding='utf-8') as file:
        sql_content = file.read()
        pyperclip.copy(sql_content)
        print("SQL commands have been copied to clipboard.")
except ImportError:
    print("pyperclip not installed. SQL commands not copied to clipboard.")