import glob
import re

def fix_mobile_menu_visibility(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the mobile menu block
    mobile_menu_match = re.search(r'<div id="mobile-menu".*?<!-- Contact Section -->', content, flags=re.DOTALL)
    # Since the mobile menu is usually right before a <script> block, let's find the closing tag safely.
    # We can just look for id="mobile-menu". Let's match from <div id="mobile-menu" up to </nav> or <script> or something.
    mobile_menu_match = re.search(r'<div id="mobile-menu".*?</script>', content, flags=re.DOTALL)
    
    if mobile_menu_match:
        mobile_block = mobile_menu_match.group(0)
        
        # We need to strip out dark:text-white so it stays text-black, since the background is bg-white.
        # Alternatively, we can add dark:bg-[#0A0A0A] to the mobile menu. Let's just make sure it stays text-black!
        mobile_block = mobile_block.replace('text-black dark:text-white', 'text-black')
        
        # The background of the mobile menu is bg-white/95. Let's also remove dark:text-gray-whatever
        # If there's any other text elements, ensure they are visible.
        mobile_block = mobile_block.replace('dark:bg-[#0A0A0A]/70', '') # remove dark overlay
        mobile_block = mobile_block.replace('dark:border-black/5', '')
        
        content = content[:mobile_menu_match.start()] + mobile_block + content[mobile_menu_match.end():]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

html_files = glob.glob('*.html')
for file in html_files:
    fix_mobile_menu_visibility(file)
    
print("Fixed mobile menu visibility!")
