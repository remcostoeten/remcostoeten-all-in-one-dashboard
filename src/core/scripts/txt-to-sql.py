
import re
import pyperclip

def escape_sql_string(value):
    """Escapes single quotes in SQL strings."""
    return value.replace("'", "''")

def parse_chat_log(file_path):
    """Parses chat log from a file and returns a list of message tuples (timestamp, sender, content)."""
    messages = []
    unique_senders = set()
    
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            match = re.match(r'\[(.*?), (.*?)\] (.*?): (.*)', line)
            if match:
                timestamp = match.group(1) + ' ' + match.group(2)
                sender = match.group(3).strip()
                content = match.group(4).strip()
                messages.append((timestamp, sender, content))
                unique_senders.add(sender)
    
    return messages, unique_senders

def generate_sql_inserts(messages, unique_senders):
    """Generates SQL insert statements for the chats and messages."""
    chats_inserts = []
    message_inserts = []

    for sender in unique_senders:
        chat_name = f"chat_{sender.lower()}"
        # Using sender as both userId and userName since userId is not clearly defined
        chat_insert = f"""
        INSERT INTO chats (name, userId, userName, lastActive, adminOnly)
        VALUES ('{chat_name}', '{escape_sql_string(sender)}', '{escape_sql_string(sender)}', '', 0);
        """
        chats_inserts.append(chat_insert.strip())

    for i, (timestamp, sender, content) in enumerate(messages, start=1):
        chat_name = f"chat_{sender.lower()}"
        message_insert = f"""
        INSERT INTO messages (id, chat_name, sender, content, timestamp, type, is_favourited)
        VALUES ({i}, '{chat_name}', '{escape_sql_string(sender)}', '{escape_sql_string(content)}', '{escape_sql_string(timestamp)}', 'text', 'false');
        """
        message_inserts.append(message_insert.strip())
    
    return chats_inserts, message_inserts

def write_sql_to_file(file_path, chats_inserts, message_inserts):
    """Writes SQL insert statements to a file with proper transaction handling."""
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write("BEGIN TRANSACTION;\n")
        file.write('\n'.join(chats_inserts) + '\n')
        file.write('\n'.join(message_inserts) + '\n')
        file.write("COMMIT;\n")

def copy_sql_to_clipboard(chats_inserts, message_inserts):
    """Copies SQL insert statements to the clipboard."""
    sql_statements = "BEGIN TRANSACTION;\n"
    sql_statements += '\n'.join(chats_inserts) + '\n'
    sql_statements += '\n'.join(message_inserts) + '\n'
    sql_statements += "COMMIT;\n"
    
    pyperclip.copy(sql_statements)

# Main processing
input_file = '/home/remcostoeten/development/remcostoeten-all-in-one-dashboard/src/core/scripts/c.txt'  # Path to your chat log file
output_file = 'output.sql'   # Change this to the desired output SQL file path

# Parse the chat log
messages, unique_senders = parse_chat_log(input_file)

# Generate SQL insert statements
chats_inserts, message_inserts = generate_sql_inserts(messages, unique_senders)

# Write SQL statements to file
write_sql_to_file(output_file, chats_inserts, message_inserts)

# Copy SQL statements to clipboard
copy_sql_to_clipboard(chats_inserts, message_inserts)

print(f"SQL insert statements have been written to {output_file} and copied to clipboard.")
