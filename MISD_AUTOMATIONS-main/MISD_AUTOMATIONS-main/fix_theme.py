import re
import glob

def fix_theme_issues(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to make sure text isn't black on black. 
    # Since <html class="dark"> is active, 'text-black' without 'dark:text-white' is invisible on dark backgrounds.
    
    # 1. Protect <nav> by swapping its 'text-black' to 'TEXT_NAV_BLACK' temporarily
    nav_match = re.search(r'<nav.*?</nav>', content, flags=re.DOTALL)
    if nav_match:
        nav_block = nav_match.group(0)
        nav_block = nav_block.replace('text-black', 'TEXT_NAV_BLACK')
        content = content[:nav_match.start()] + nav_block + content[nav_match.end():]
        
    # 2. Fix typos
    content = content.replace('bg-gray-50est', 'bg-gray-50 dark:bg-[#111111]')
    content = content.replace('bg-gray-200est', 'bg-gray-200 dark:bg-[#222222]')
    
    # 3. Add dark:text-white to text-black if it's not already there
    # Regex: find 'text-black', make sure it's not immediately followed by ' dark:text-white' or ' dark:text-on-surface'
    # Actually, the safest way is just doing replace('text-black dark:text-white', 'text-black') first to dedup
    content = content.replace('text-black dark:text-white', 'text-black')
    content = content.replace('text-black dark:text-on-surface', 'text-black')
    content = content.replace('text-black', 'text-black dark:text-white')
    
    # 4. Fix specific bg-gray-50 blocks that have no dark equivalent
    content = content.replace('bg-gray-50 dark:bg-black', 'bg-gray-50')
    content = content.replace('bg-gray-50 group hover', 'bg-gray-50 dark:bg-[#111111] group hover')
    content = content.replace('bg-gray-50 relative', 'bg-gray-50 dark:bg-[#111111] relative')
    
    # 5. Restore <nav>
    content = content.replace('TEXT_NAV_BLACK', 'text-black')
    
    # 6. Any other places like "bg-white" in body but has dark?
    # Ensure footer is ok
    footer_match = re.search(r'<footer.*?</footer>', content, flags=re.DOTALL)
    if footer_match:
        footer_block = footer_match.group(0).replace('text-black dark:text-white', 'text-white')
        content = content[:footer_match.start()] + footer_block + content[footer_match.end():]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

html_files = glob.glob('*.html')
for file in html_files:
    fix_theme_issues(file)
    
print("Fixed black-on-black text issues across all files!")
