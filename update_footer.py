import os
import re

new_footer = """    <!-- Footer -->
    <footer class="bg-surface w-full relative bottom-0 border-t-2 border-primary">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
            <div>
                <div class="text-4xl font-bold uppercase text-white mb-6 leading-tight">MISD <span
                        class="text-primary">Automation</span><br><span class="text-2xl">Pvt Ltd</span></div>
                <p class="text-on-surface-variant text-lg leading-relaxed mb-6">Engineered for absolute precision in
                    autonomous systems and industrial automation.</p>
            </div>
            <div>
                <p class="font-header text-2xl text-white uppercase tracking-widest mb-6">Ecosystem</p>
                <ul class="space-y-4 font-label text-base text-on-surface-variant uppercase tracking-wider">
                    <li><a class="hover:text-white transition-colors" href="index.html">Home</a></li>
                    <li><a class="hover:text-white transition-colors" href="product-x1.html">Products</a></li>
                    <li><a class="hover:text-white transition-colors" href="3d-store.html">3D Store</a></li>
                </ul>
            </div>
            <div class="flex flex-col items-center justify-start">
                <p class="font-header text-2xl text-white uppercase tracking-widest mb-6">Skill Training</p>
                <a class="font-label text-base text-primary uppercase tracking-wider hover:text-white transition-colors"
                    href="index.html#contact">Contact for Skill Training</a>
            </div>
        </div>
        <div class="border-t border-black/5 dark:border-white/5 py-8 text-center">
            <p class="font-label text-sm text-on-surface-variant uppercase tracking-[0.3em]">
                © 2025 MISD Automation Pvt Ltd. Engineered for Precision.
            </p>
        </div>
    </footer>"""

for file in os.listdir('.'):
    if file.endswith('.html') and file != 'admin-debug.html':
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Try finding with comment first, then just the footer tag
        if '<!-- Footer -->' in content:
            content = re.sub(r'<!-- Footer -->.*?</footer>', new_footer, content, flags=re.DOTALL)
        else:
            content = re.sub(r'<footer.*?</footer>', new_footer, content, flags=re.DOTALL)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')
