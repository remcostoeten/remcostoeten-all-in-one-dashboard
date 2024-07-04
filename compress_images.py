import os
import sys
from PIL import Image
import piexif
from pathlib import Path
import re

def convert_to_webp(source):
    destination = source.with_suffix(".webp")
    image = Image.open(source)  # Open image
    image.save(destination, format="webp", optimize=True, quality=85)  # Convert image to webp
    return destination

def get_file_size(file_path):
    return os.path.getsize(file_path)

def process_images(directory):
    converted_files = []
    total_original_size = 0
    total_converted_size = 0
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                source = Path(root) / file
                try:
                    original_size = get_file_size(source)
                    total_original_size += original_size
                    
                    webp_file = convert_to_webp(source)
                    converted_size = get_file_size(webp_file)
                    total_converted_size += converted_size
                    
                    size_change = original_size - converted_size
                    percentage_change = (size_change / original_size) * 100
                    
                    converted_files.append((source, webp_file, size_change, percentage_change))
                    print(f"Converted {source} to {webp_file}")
                    print(f"Size change: {size_change / 1024:.2f} KB ({percentage_change:.2f}% reduction)")
                except Exception as e:
                    print(f"Error converting {source}: {str(e)}")
    
    return converted_files, total_original_size, total_converted_size

def update_references(directory, converted_files):
    def replace_in_file(file_path, old_name, new_name):
        with open(file_path, 'r') as file:
            content = file.read()
        
        patterns = [
            rf'(src=[\"\']){re.escape(old_name)}([\"\'])',
            rf'(url\()[\'\"]{re.escape(old_name)}[\'\"](\))'
        ]
        
        for pattern in patterns:
            content = re.sub(pattern, rf'\1{new_name}\2', content)
        
        with open(file_path, 'w') as file:
            file.write(content)

    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                file_path = Path(root) / file
                for old_file, new_file, _, _ in converted_files:
                    replace_in_file(file_path, old_file.name, new_file.name)

def main():
    public_dir = Path("public")
    src_dir = Path("src")
    
    if not public_dir.exists() or not src_dir.exists():
        print("Error: 'public' or 'src' directory not found.")
        sys.exit(1)

    converted_files, total_original_size, total_converted_size = process_images(public_dir)
    
    print("\nUpdating references in source files...")
    update_references(src_dir, converted_files)
    
    print("\nConversion and optimization complete.")
    print(f"Total files converted: {len(converted_files)}")
    
    total_size_change = total_original_size - total_converted_size
    total_percentage_change = (total_size_change / total_original_size) * 100
    
    print(f"\nTotal original size: {total_original_size / 1024 / 1024:.2f} MB")
    print(f"Total converted size: {total_converted_size / 1024 / 1024:.2f} MB")
    print(f"Total size reduction: {total_size_change / 1024 / 1024:.2f} MB ({total_percentage_change:.2f}% reduction)")

if __name__ == "__main__":
    main()