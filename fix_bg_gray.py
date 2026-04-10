import glob

def fix_bg_white_on_white(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue: text becomes dark:text-white but the background stays bg-gray-50 because it lacks a darkmode equivalent.
    # We will replace all bg-gray-50 with bg-gray-50 dark:bg-[#111111] (unless it already has dark:bg-)
    
    # Let's split by bg-gray-50 and conditionally append dark:bg-[#111111]
    import re
    # Match bg-gray-50 but skip if it's already followed by dark:bg
    # A negative lookahead for ' dark:bg'
    content = re.sub(r'bg-gray-50(?!\s*dark:bg-)', 'bg-gray-50 dark:bg-[#111111]', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

html_files = glob.glob('*.html')
for file in html_files:
    fix_bg_white_on_white(file)
    
print("Fixed white text on white backgrounds caused by missing dark mode classes on bg-gray-50!")
