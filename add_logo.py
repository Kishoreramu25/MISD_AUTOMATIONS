import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content

    # 1. Add Favicon if not presents
    if 'rel="icon"' not in new_content:
        new_content = re.sub(r'<title>', r'<link rel="icon" type="image/png" href="logo bg.png"/>\n    <title>', new_content, count=1)
        
    # 2. Update desktop navbar branding
    desktop_brand_pattern = re.compile(r'<div class="text-2xl font-black uppercase tracking-tighter text-white">\s*MISD <span class="text-primary">Automations</span>\s*</div>')
    new_desktop_brand = """<a href="index.html" class="flex items-center gap-3 decoration-transparent hover:opacity-80 transition-opacity">
                <img src="logo bg.png" alt="MISD Logo" class="h-8 md:h-10 w-auto object-contain">
                <div class="text-2xl font-black uppercase tracking-tighter text-white">
                    MISD <span class="text-primary">Automations</span>
                </div>
            </a>"""
    new_content = desktop_brand_pattern.sub(new_desktop_brand, new_content)

    # 3. Update mobile sidebar branding
    mobile_brand_pattern = re.compile(r'<div class="text-xl font-black uppercase tracking-tighter text-white">\s*MISD <span class="text-primary">Automations</span>\s*</div>')
    new_mobile_brand = """<div class="flex items-center gap-3">
                <img src="logo bg.png" alt="MISD Logo" class="h-8 w-auto object-contain">
                <div class="text-xl font-black uppercase tracking-tighter text-white">
                    MISD <span class="text-primary">Automations</span>
                </div>
            </div>"""
    new_content = mobile_brand_pattern.sub(new_mobile_brand, new_content)

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated branding in {f}")
