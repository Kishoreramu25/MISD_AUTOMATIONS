const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('http://127.0.0.1:41093/3d-store.html');
    
    // Check if MISDCatalogAdmin is available
    const isAvail = await page.evaluate(() => typeof window.MISDCatalogAdmin !== 'undefined');
    console.log('Admin available:', isAvail);
    
    // Open admin directly
    await page.evaluate(() => {
        window.MISDCatalogAdmin.openAdminPanel({ dataset: 'store', storeCategory: 'keychain' });
    });
    
    // Wait for panel
    await page.waitForSelector('#misd-admin-panel', { visible: true });
    console.log('Panel opened');
    
    // Get items count
    const items = await page.evaluate(() => document.querySelectorAll('[data-item-id]').length);
    console.log('Items found:', items);
    
    // Click the first item
    await page.evaluate(() => {
        document.querySelector('[data-item-id="keychain-1"]').click();
    });
    
    // Check form fields
    const formVals = await page.evaluate(() => {
        return {
            idName: document.getElementById('misd-admin-item-id').value,
            name: document.getElementById('misd-admin-name').value
        };
    });
    console.log('Form before edit:', formVals);
    
    // Edit the name
    await page.evaluate(() => {
        document.getElementById('misd-admin-name').value = 'Updated Keychain Name';
    });
    
    // Submit the form by clicking the save button
    await page.evaluate(() => {
        document.getElementById('misd-admin-save').click();
    });
    
    // Check form fields again
    const formValsAfter = await page.evaluate(() => {
        return {
            idName: document.getElementById('misd-admin-item-id').value,
            name: document.getElementById('misd-admin-name').value
        };
    });
    console.log('Form after save:', formValsAfter);
    
    // Check local storage directly
    const stored = await page.evaluate(() => {
        const data = localStorage.getItem('misd_catalog_state_v1');
        if (!data) return null;
        const parsed = JSON.parse(data);
        return parsed.store.keychain.find(k => k.id === 'keychain-1').name;
    });
    console.log('Stored name after save:', stored);
    
    await browser.close();
})();
