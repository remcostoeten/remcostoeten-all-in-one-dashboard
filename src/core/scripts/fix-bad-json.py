import json
import re
import pyperclip

def fix_json_string_line(line):
    # Existing fixes...
    pass

def process_large_json_file(input_filename, output_filename):
    fixed_objects = []
    
    with open(input_filename, 'r', encoding='utf-8') as file:
        json_str = file.read()
        
        # Attempt to load the entire JSON string at once
        try:
            full_json_data = json.loads(json_str)
            for item in full_json_data:
                fixed_objects.append(item)
        except json.JSONDecodeError as e:
            print(f"Failed to decode full JSON string: {e}")
            return
import json
import re
import pyperclip

def fix_missing_commas_in_json(json_str):
    # Simple regex to find potential locations for missing commas
    pattern = r'(?<=\})\s*(?=[^,])'
    # Replace matched spaces before closing brackets with a comma
    fixed_json_str = re.sub(pattern, ', ', json_str)
    return fixed_json_str

def process_large_json_file(input_filename, output_filename):
    fixed_objects = []
    
    with open(input_filename, 'r', encoding='utf-8') as file:
        json_str = file.read()
        
        # Attempt to fix missing commas before parsing
        json_str = fix_missing_commas_in_json(json_str)
        
        # Debugging: Print the first 500 characters of the potentially fixed JSON string
        print("Fixed JSON snippet:", json_str[:500])
        
        try:
            full_json_data = json.loads(json_str)
            for item in full_json_data:
                fixed_objects.append(item)
        except json.JSONDecodeError as e:
            print(f"Failed to decode fixed JSON string: {e}")
            return
        
        # Output the cleaned data to a file
        with open(output_filename, 'w', encoding='utf-8') as outfile:
            json.dump(fixed_objects, outfile, indent=4, ensure_ascii=False)
        
        # Copy the cleaned data to the clipboard
        json_str = json.dumps(fixed_objects, indent=4, ensure_ascii=False)
        pyperclip.copy(json_str)
        print("Cleaned JSON data has been copied to the clipboard and written to", output_filename)

# Usage example remains the same

# Usage example
input_filename = '/home/remcostoeten/development/remcostoeten-all-in-one-dashboard/src/core/scripts/data.json'
output_filename = 'a.json'

process_large_json_file(input_filename, output_filename)
