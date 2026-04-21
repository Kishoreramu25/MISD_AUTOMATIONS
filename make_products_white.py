import glob
import re

def make_page_light_mode(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove forced dark mode from the html tag
    content = content.replace('<html class="dark"', '<html')
    
    # 2. To avoid breaking things in the <head> tailwind config, we will only replace bg-surface in the <body>
    body_match = re.search(r'<body.*', content, flags=re.DOTALL)
    if body_match:
        body = body_match.group(0)
        
        # Replace bg-surface with bg-white
        body = body.replace('bg-surface', 'bg-white')
        # Replace from-surface with from-white
        body = body.replace('from-surface', 'from-white')
        body = body.replace('via-surface', 'via-white')
        body = body.replace('border-surface', 'border-white')
        
        # Keep footer dark if desired, or make everything white. 
        # The user said "give all products page bg as white"
        # We will turn all dark elements into white
        body = body.replace('bg-[#111111]', 'bg-gray-50')
        body = body.replace('bg-[#222222]', 'bg-gray-100')
        body = body.replace('bg-black', 'bg-white')
        body = body.replace('text-white', 'text-black') # This is aggressive, but ensures text is visible on white
        
        # Protect specific colors like primary (red). text-black dark:text-white was already mapping to black in light mode.
        # But if we forcibly replaced 'text-white' to 'text-black', we might have broken text-white on red buttons!
        # Let's fix buttons securely.
        body = body.replace('bg-primary text-black', 'bg-primary text-white')
        body = body.replace('bg-primary-container text-black', 'bg-primary-container text-white')
        body = body.replace('bg-ignition text-black', 'bg-ignition text-white')
        
        content = content[:body_match.start()] + body

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Apply to all product pages
for file in glob.glob('product-*.html'):
    make_page_light_mode(file)

print("All product pages updated to light mode / white background.")
