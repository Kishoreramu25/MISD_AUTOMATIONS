import re

def fix_black_on_black(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the contact form inputs
    content = content.replace('bg-gray-50est', 'bg-[#111111] text-white')
    content = content.replace('text-black font-header tracking-widest p-4', 'font-header tracking-widest p-4') # cleaned up the text-black that was next to bg-gray-50est
    
    # In index.html, the footer and contact section have hardcoded bg-surface (#0A0A0A - black)
    # But they have text-black dark:text-white. Since dark mode isn't toggled on, it stays black!
    
    # 1. Contact container text
    # "Let's Build Together" is text-black mb-10, but the section bg is bg-gray-50, which is fine (light mode)
    # But the <div class="bg-surface..."> has white text inside? Wait, the inputs are the problem.
    # What about the Footer?
    
    # Fix the footer text classes
    footer_match = re.search(r'<footer.*?</footer>', content, flags=re.DOTALL)
    if footer_match:
        footer_block = footer_match.group(0)
        # If footer is bg-surface, it's black. Let's make all text-black inside it text-white
        footer_block = footer_block.replace('text-black dark:text-white', 'text-white')
        footer_block = footer_block.replace('text-black', 'text-white') # Just in case
        
        content = content[:footer_match.start()] + footer_block + content[footer_match.end():]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Apply to all relevant HTML files with black footers or contact forms
import glob
html_files = glob.glob('*.html')
for file in html_files:
    fix_black_on_black(file)
    
print("Fixed black on black text rendering issues.")
