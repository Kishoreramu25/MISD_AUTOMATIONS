import os
import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix the logo container so it is fully responsive on mobile:
    # Decrease h-12 to h-8 on mobile, and text-3xl to text-xl sm:text-2xl
    content = content.replace(
        'class="h-12 md:h-16 w-auto object-contain"',
        'class="h-8 sm:h-10 md:h-16 w-auto object-contain"'
    )
    content = content.replace(
        'class="font-headline text-3xl md:text-4xl tracking-[0.1em] text-black mt-1"',
        'class="font-headline text-xl sm:text-2xl md:text-4xl tracking-[0.1em] text-black mt-1"'
    )
    
    # Also if there's any overflow, let's allow it to hide "AUTOMATIONS" entirely on ultra-tiny screens like <350px 
    # Or just let text-xl fit. text-xl on MISD AUTOMATIONS takes ~150px. h-8 takes ~32px. gap-4 takes 16px. Total ~200px. It fits fine.
    
    # Let's also make sure the mobile menu is correctly themed since we reverted to light mode.
    # The offcanvas menu might be dark or white. 
    # In the recent user edit, it's: `bg-surface/95` (which means dark or white depending on dark mode).
    # Since we want it white for the light theme requested:
    mobile_match = re.search(r'<div id="mobile-menu".*?<!-- Footer -->', content, flags=re.DOTALL)
    if mobile_match:
        mobile_block = mobile_match.group(0)
        # Make the off-canvas menu explicitly white
        mobile_block = mobile_block.replace('bg-surface/95', 'bg-white/95')
        mobile_block = mobile_block.replace('bg-[#1a1a1a]', 'bg-gray-50')
        mobile_block = mobile_block.replace('bg-[#111111]', 'bg-gray-200')
        mobile_block = mobile_block.replace('text-white', 'text-black')
        mobile_block = mobile_block.replace('border-white/10', 'border-black/10')
        mobile_block = mobile_block.replace('border-white/5', 'border-black/5')
        
        content = content[:mobile_match.start()] + mobile_block + content[mobile_match.end():]

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navbar responsiveness and mobile menu theming fixed across all HTML files.")
