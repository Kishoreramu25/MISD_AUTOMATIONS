import glob

def update_year(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update copyright year to 2025
    content = content.replace('© 2024 MISD Automation Pvt Ltd', '© 2025 MISD Automation Pvt Ltd')
    content = content.replace('© 2024 AERO-KINETIC', '© 2025 AERO-KINETIC') # just in case any remained
    content = content.replace('© 2024 MISD Automation', '© 2025 MISD Automation')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

files = glob.glob('*.html') + glob.glob('*.md')
for file in files:
    print(f"Updating year in {file}...")
    update_year(file)

print("Done updating copyright year to 2025!")
