import json
import pyperclip

def escape_sql_string(value):
    """Escapes single quotes in SQL strings."""
    return value.replace("'", "''")

import json
import pyperclip

def escape_sql_string(value):
    """Escapes single quotes in SQL strings."""
    return value.replace("'", "''")

def json_to_sql_inserts(json_data):
    chat_name = f"chat_{json_data['userId']}"

    # Escape values for SQL
    user_id = escape_sql_string(json_data['userId'])
    user_name = escape_sql_string(json_data['userName'])
    last_active = escape_sql_string(json_data['lastActive'])

    # Insert into chats table
    chats_insert = f"""
    INSERT INTO chats (name, user_id, user_name, last_active)
    VALUES ('{chat_name}', '{user_id}', '{user_name}', '{last_active}');
    """

    # Insert into messages table
    messages_inserts = []
    for msg in json_data['messages']:
        msg_id = escape_sql_string(msg['id'])
        sender = escape_sql_string(msg['sender'])
        content = escape_sql_string(msg['content'])
        timestamp = escape_sql_string(msg['timestamp'])
        msg_type = escape_sql_string(msg['type'])
        is_favourited = escape_sql_string('false')  # Add isFavourited field

        messages_insert = f"""
        INSERT INTO messages (id, chat_name, sender, content, timestamp, type, is_favourited)
        VALUES ('{msg_id}', '{chat_name}', '{sender}', '{content}', '{timestamp}', '{msg_type}', '{is_favourited}');
        """
        messages_inserts.append(messages_insert.strip())

    return chats_insert.strip(), messages_inserts

# The json you want to convert.
# If this won't work try a absolute path e.g. running;
# python /home/remcostoeten/projects/freshpanel/src/core/scripts/convert-json-to-sql.py
with open('src/core/scripts/data.json', 'r') as file:
    json_data = json.load(file)

# Convert JSON to SQL inserts
chats_insert, messages_inserts = json_to_sql_inserts(json_data)

# Combine all SQL statements into a single transaction
transaction_sql = "BEGIN TRANSACTION;\n"
transaction_sql += chats_insert + '\n' + '\n'.join(messages_inserts) + "\nCOMMIT;"

# Copy to clipboard
pyperclip.copy(transaction_sql)

print("SQL insert statements have been copied to clipboard")
