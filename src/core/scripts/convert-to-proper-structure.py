import json
from datetime import datetime
import argparse

def convert_timestamp(timestamp_str):
    timestamp_str = timestamp_str.strip('[]')
    formats = ["%d/%m/%Y, %H:%M:%S", "%H:%M, %d-%m-%Y"]
    for fmt in formats:
        try:
            dt = datetime.strptime(timestamp_str, fmt)
            return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
        except ValueError:
            continue
    print(f"Warning: Unable to parse timestamp '{timestamp_str}'. Using it as-is.")
    return timestamp_str

def process_messages(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: Input file '{input_file}' not found.")
        return
    except json.JSONDecodeError:
        print(f"Error: '{input_file}' is not a valid JSON file.")
        return

    users = {}
    messages = []

    for item in data:
        name = item.get('name', 'Unknown')
        user_id = name.lower().replace(' ', '_')
        timestamp = item.get('timestamp', '')

        if user_id not in users:
            users[user_id] = {
                "userId": user_id,
                "userName": name,
                "lastActive": convert_timestamp(timestamp),
                "messages": []
            }

        message_type = "image" if item.get('image') else "text"
        content = item.get('image') if message_type == "image" else item.get('message', '')

        message = {
            "id": f"msg{len(messages) + 1}",
            "sender": user_id,
            "content": content,
            "timestamp": convert_timestamp(timestamp),
            "type": message_type
        }

        messages.append(message)

        if convert_timestamp(timestamp) > users[user_id]['lastActive']:
            users[user_id]['lastActive'] = convert_timestamp(timestamp)

    if not users:
        print("Error: No valid user data found in the input JSON.")
        return

    first_user = next(iter(users.values()))
    first_user['messages'] = messages

    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(first_user, f, indent=2, ensure_ascii=False)
        print(f"Conversion complete. Output written to {output_file}")
    except IOError:
        print(f"Error: Unable to write to output file '{output_file}'.")

def main():
    parser = argparse.ArgumentParser(description="Convert WhatsApp chat JSON to a specific format.")
    parser.add_argument('-i', '--input', required=True, help="Input JSON file path")
    parser.add_argument('-o', '--output', required=True, help="Output JSON file path")

    args = parser.parse_args()

    process_messages(args.input, args.output)

if __name__ == "__main__":
    main()
