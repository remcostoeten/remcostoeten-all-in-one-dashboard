"""
Generates a random chat conversation with a set of predefined messages.

The `generate_chat` module provides functions to generate a random chat conversation with a set of predefined messages. The conversation is represented as a JSON object with the following structure:


{
  "userId": "alice456",
  "userName": "Alice Smith",
  "lastActive": "2024-07-18T15:45:00Z",
  "messages": [
    {
      "id": "msg1",
      "sender": "bob789",
      "content": "Hey team, any updates on the project?",
      "timestamp": "2024-07-18T09:12:34Z",
      "type": "text"
    },
    {
      "id": "msg2",
      "sender": "alice456",
      "content": "I've finished the design mockups. Sharing them now.",
      "timestamp": "2024-07-18T09:15:22Z",
      "type": "text"
    },
    ...
  ]
}


The `generate_message` function generates a random message with a unique ID, sender, content, timestamp, and type. The `random_timestamp` function generates a random timestamp within the specified start and end times. The `generate_random_message` function returns a random message from a predefined list of phrases.

The module generates a conversation with a configurable number of messages, with the participants and time range also being configurable.
import json
import random
import uuid
from datetime import datetime, timedelta

# Function to generate a random timestamp
def random_timestamp(start, end):
    return start + timedelta(seconds=random.randint(0, int((end - start).total_seconds())))

# Function to generate a random message content
def generate_random_message():
    phrases = [
        "Hey team, any updates on the project?",
        "I've finished the design mockups. Sharing them now.",
        "Thanks! I'll review them shortly.",
        "Can we have a meeting at 3 PM?",
        "Sure, I'll send the invite.",
        "Don't forget to check the latest updates.",
        "I'll be out of office tomorrow.",
        "Let's finalize the report by today.",
        "Can someone review my code?",
        "We need to discuss the budget for next month.",
        "The client meeting is rescheduled to 2 PM.",
        "Please share the presentation slides.",
        "Good job on the last sprint!",
        "Let's catch up over a call.",
        "Can you update the documentation?",
        "I've added comments to the shared document.",
        "Let's aim to complete this by EOD.",
        "I'll need your feedback on this.",
        "Who's available for a quick call?",
        "I'll handle the deployment.",
        "Please check the latest email from HR.",
        "The server maintenance is scheduled for tonight.",
        "I've pushed the latest changes to the repo.",
        "Please review the PR when you get a chance.",
        "I'll join the call in 5 minutes."
    ]
    return random.choice(phrases)

# Function to generate a random message
def generate_message(msg_id, sender):
    return {
        "id": f"msg{msg_id}",
        "sender": sender,
        "content": generate_random_message(),
        "timestamp": random_timestamp(start_time, end_time).isoformat() + 'Z',
        "type": "text"
    }

# Number of messages to generate
num_messages = 130

# Define the conversation participants
participants = ["alice456", "bob789", "charlie123"]
start_time = datetime(2024, 7, 18, 9, 0, 0)
end_time = datetime(2024, 7, 18, 17, 0, 0)

# Define the conversation metadata
conversation = {
    "userId": "alice456",
    "userName": "Alice Smith",
    "lastActive": datetime(2024, 7, 18, 15, 45, 0).isoformat() + 'Z',
    "messages": []
}

# Generate messages
for i in range(1, num_messages + 1):
    sender = random.choice(participants)
    message = generate_message(i, sender)
    conversation["messages"].append(message)

# Convert to JSON
conversation_json = json.dumps(conversation, indent=2)

# Print JSON output
print(conversation_json)
