(function () {
    const STORAGE_KEY = 'misd_catalog_state_v1';
    const CLICK_WINDOW_MS = 500;

    const DEFAULT_STATE = {
        productsPage: [
            {
                id: 'product-agriculture',
                name: 'Autonomous Precision Agriculture Drone',
                category: 'Agriculture',
                year: '2025',
                description: 'Precision agriculture solution with coordinated drone swarms for crop monitoring, soil analysis, and targeted spraying operations.',
                image: './Autonomous swarm drone doe precision agriculture.jpeg',
                link: 'product-agriculture.html',
                icon: 'agriculture',
                tag: 'Smart Farming',
                imageFit: 'cover'
            },
            {
                id: 'product-autonomous',
                name: 'Autonomous Drone',
                category: 'Industrial',
                year: '2025',
                description: 'Advanced autonomous navigation system for industrial inspections, mapping, and data collection in challenging environments.',
                image: './HEXACOPTER.jpg',
                link: 'product-autonomous.html',
                icon: 'precision_manufacturing',
                tag: 'Industrial Grade',
                imageFit: 'cover'
            },
            {
                id: 'product-ciniwhoop',
                name: 'CINIWHOOP',
                category: 'Racing',
                year: '2025',
                description: 'High-performance racing drone designed for competitive FPV racing with precision controls and extreme maneuverability.',
                image: './CINIWHOOP.jpg',
                link: 'product-ciniwhoop.html',
                icon: 'sports_esports',
                tag: 'Competition Ready',
                imageFit: 'cover'
            },
            {
                id: 'product-fpv-racing',
                name: 'FPV Racing Drone',
                category: 'Performance',
                year: '2025',
                description: 'Professional-grade FPV racing platform with advanced flight controller and real-time video transmission for immersive racing experience.',
                image: './fpv.jpeg',
                link: 'product-fpv-racing.html',
                icon: 'videocam',
                tag: 'FPV Excellence',
                imageFit: 'cover'
            },
            {
                id: 'product-medicopter',
                name: 'Delevery Drone',
                category: 'Medical',
                year: '2025',
                description: 'Specialized medical delivery drone for transporting critical supplies, vaccines, and emergency medical equipment to remote locations.',
                image: './MEDICOPTER.jpg',
                link: 'product-medicopter.html',
                icon: 'local_hospital',
                tag: 'Life Saving Tech',
                imageFit: 'cover'
            },
            {
                id: 'product-surveillance',
                name: 'Autonomous Swarm Drones',
                category: 'Surveillance',
                year: '2025',
                description: 'Advanced coordinated drone swarms providing comprehensive aerial surveillance, real-time monitoring, and intelligent threat detection.',
                image: './Autonomous Swarm drones for Aerial Surveillance.png',
                link: 'product-surveillance.html',
                icon: 'visibility',
                tag: 'Advanced Surveillance',
                imageFit: 'cover'
            },
            {
                id: 'product-toy-drone',
                name: 'TOY Drone',
                category: 'Toy',
                year: '2026',
                description: 'Beginner-friendly recreational drone built for safe practice flights, hobby learning, and fun daily flying sessions.',
                image: './toy.jpg',
                link: 'product-toy-drone.html',
                icon: 'toys',
                tag: 'Starter Friendly',
                imageFit: 'cover'
            },
            {
                id: 'product-trainer-kit',
                name: 'Trainer Quadcopter Kit',
                category: 'Education',
                year: '2026',
                description: 'Classroom-ready drone platform built for practical flight training, assembly practice, and structured UAV learning sessions.',
                image: './TRainer.jpeg',
                link: 'product-trainer-quadcopter-kit.html',
                icon: 'school',
                tag: 'Training Ready',
                imageFit: 'contain'
            }
        ],
        store: {
            keychain: [
                { id: 'keychain-1', name: 'Keychain Model K-01', price: 120, image: 'key1.jpg', description: 'Flexible fish-style articulated keychain for bags and keys.', features: ['Articulated body design', 'Daily-carry friendly', 'Gift pack ready'] },
                { id: 'keychain-2', name: 'Keychain Model K-02', price: 150, image: 'key2.jpg', description: 'Compact custom charm keychain with lightweight daily-carry design.', features: ['Compact profile', 'Custom charm styling', 'Easy bag attachment'] },
                { id: 'keychain-3', name: 'Keychain Model K-03', price: 100, image: 'key3.jpg', description: 'Mini dinosaur keychain concept with smooth rounded edges and ring mount.', features: ['Mini dino silhouette', 'Rounded safe edges', 'Strong ring mount'] },
                { id: 'keychain-4', name: 'Keychain Model K-04', price: 279, image: 'key4.jpg', description: 'Cute gift-ready keychain model for school kits and return gifts.', features: ['Return-gift friendly', 'Cute display shape', 'Lightweight print'] },
                { id: 'keychain-5', name: 'Keychain Model K-05', price: 110, image: 'key5.jpg', description: 'Pet-style keychain form with polished finish and secure hook point.', features: ['Pet-inspired shape', 'Polished finish', 'Secure hook point'] },
                { id: 'keychain-6', name: 'Keychain Model K-06', price: 75, image: 'key6.jpg', description: 'Personalized 3D key tag concept designed for laser text customization.', features: ['Name-text ready', 'Personalized format', 'Slim key tag body'] },
                { id: 'keychain-7', name: 'Keychain Model K-07', price: 150, image: 'key7.jpg', description: 'Character-themed keychain model suited for anime and pop-culture fans.', features: ['Character styling', 'Collector appeal', 'Event merch ready'] },
                { id: 'keychain-8', name: 'Keychain Model K-08', price: 60, image: 'key8.jpg', description: 'Minimal mascot keychain with durable print walls and balanced shape.', features: ['Minimal mascot form', 'Durable wall thickness', 'Balanced carry size'] },
                { id: 'keychain-10', name: 'Keychain Model K-10', price: 100, image: 'key10.jpg', description: 'Cup charm style keychain ideal for cafe-theme merch and promos.', features: ['Cup charm styling', 'Cafe merch fit', 'Promo campaign ready'] },
                { id: 'keychain-11', name: 'Keychain Model K-11', price: 200, image: 'key11.jpg', description: 'Long-form dinosaur keychain with articulated tail and fun desk appeal.', features: ['Long dino profile', 'Articulated tail', 'Desk-display appeal'] },
                { id: 'keychain-12', name: 'Keychain Model K-12', price: 250, image: 'key12.jpg', description: 'Barrel-style novelty keychain designed for collector gift packs.', features: ['Novelty barrel form', 'Collector-friendly style', 'Bundled gift ready'] }
            ],
            toys: [
                { id: 'toy-1', name: 'Toy Model T-01', price: 300, image: 'toy1.jpg', description: 'Compact display toy with playful proportions for desks, shelves, and gifting.', features: ['Compact display size', 'Kid-friendly styling', 'Gift-ready finish'] },
                { id: 'toy-2', name: 'Toy Model T-02', price: 150, image: 'https://media.printables.com/media/prints/1137074/images/8580648_5cbf6b94-5d7d-4e4e-a2d0-069eefadddf0_be57265d-d7e5-4a98-bb2b-7c24384a67fa/thumbs/cover/800x800/jpg/a82bc337dc65fd3affe1699d8579069f.jpg', description: 'Character-style toy print designed for lightweight display and everyday play.', features: ['Character-inspired form', 'Display shelf ready', 'Smooth print profile'] },
                { id: 'toy-3', name: 'Toy Model T-03', price: 499, image: 'https://media.printables.com/media/prints/158180f7-bf31-4c26-aee9-e24ec19120d8/images/11445498_1b1dde01-f40c-48ad-94e2-6fcc2d090f47_3b4aba7a-5ab9-40b4-aced-9f54fcab3c4f/thumbs/cover/800x800/png/chatgpt-image-16-dez-2025-23_44_54.png', description: 'Fun collectible toy model with bright visual appeal and a stand-out silhouette.', features: ['Collectible style', 'Bright visual presence', 'Showpiece shape'] },
                { id: 'toy-4', name: 'Toy Model T-04', price: 299, image: 'toy4.jpg', description: 'Rounded toy figure made for easy handling, gifting, and tabletop placement.', features: ['Rounded safe edges', 'Easy tabletop display', 'Friendly profile'] },
                { id: 'toy-5', name: 'Toy Model T-05', price: 189, image: 'https://media.printables.com/media/prints/c38270ef-90e7-46d5-8ce7-0cc12f1ebf51/images/11949242_64898394-3d1e-4a31-9401-2a5eb1861103_4fe3e133-c017-4265-9115-8c67787daa78/thumbs/cover/800x800/webp/lowpolyanimalreal.webp', description: 'Animal-inspired decorative toy piece with faceted surfaces and modern styling.', features: ['Animal-inspired concept', 'Decor-friendly shape', 'Modern faceted form'] },
                { id: 'toy-6', name: 'Toy Model T-06', price: 350, image: 'https://media.printables.com/media/prints/519668/images/4205312_bdd6ce41-3005-4b12-b44c-3b7d20fdd5d5/thumbs/cover/800x800/png/skull-art3dchoix.png', description: 'Bold art-style toy collectible created for themed display corners and fan collections.', features: ['Art collectible look', 'Conversation-piece design', 'Display-corner ready'] },
                { id: 'toy-7', name: 'Toy Model T-07', price: 120, image: 'toy7.jpg', description: 'Compact mini toy with a playful profile designed for casual gifting and display.', features: ['Playful profile', 'Compact mini format', 'Easy gifting option'] },
                { id: 'toy-8', name: 'Toy Model T-08', price: 200, image: 'toy8.jpg', description: 'Stylized toy model with durable print volume and a balanced collector look.', features: ['Stylized body', 'Collector-friendly finish', 'Durable print body'] },
                { id: 'toy-9', name: 'Toy Model T-09', price: 99, image: 'toy9.jpg', description: 'Novelty toy display piece suited for return gifts, desks, and store showcases.', features: ['Novelty appeal', 'Return-gift ready', 'Shelf display friendly'] },
                { id: 'toy-10', name: 'Toy Model T-10', price: 499, image: 'toy10.jpg', description: 'Detailed toy concept made to stand out in themed 3D printed toy collections.', features: ['Detailed finish', 'Collection-ready design', 'Strong visual shape'] },
                { id: 'toy-11', name: 'Toy Model T-11', price: 499, image: 'toy11.jpg', description: 'Collector-style toy piece with broader form factor and stable display posture.', features: ['Collector format', 'Stable posture', 'Display-led styling'] },
                { id: 'toy-12', name: 'Toy Model T-12', price: 399, image: 'toy12.jpg', description: 'Premium toy collectible with display presence suited for gifting and showcases.', features: ['Premium finish', 'Showcase presence', 'Gift collection fit'] }
            ],
            gifts: [
                { id: 'gift-1', name: 'Decorative Gift Box', price: 500, image: 'gift1.jpeg', description: 'Beautifully crafted 3D printed gift box suited for premium presentations.', features: ['Premium finish', 'Intricate patterns', 'Durable structure'] },
                { id: 'gift-2', name: 'Abstract Art Piece', price: 1299, image: 'gif2.jpg', description: 'Modern abstract 3D sculpture ideal for corporate desks and modern homes.', features: ['Modern aesthetic', 'Display model', 'Corporate ready'] },
                { id: 'gift-3', name: 'Personalized Ornament', price: 499, image: 'gif3.jpg', description: 'Elegant ornament piece making a fantastic personalized holiday gift.', features: ['Elegant details', 'Ornament style', 'Lightweight display'] },
                { id: 'gift-4', name: 'Geomancer Sculpture', price: 1549, image: 'gif4.jpg', description: 'Precision engineered geometric object for art collectors and enthusiasts.', features: ['Geometric shape', 'Artistic value', 'Precision printed'] },
                { id: 'gift-5', name: 'Custom Stand', price: 749, image: 'gif5.jpg', description: 'Stylized custom stand designed to hold phones, business cards, or tablets.', features: ['Multi-purpose', 'Stylized decor', 'Robust design'] },
                { id: 'gift-6', name: 'Novelty Key Holder', price: 599, image: 'gif6.jpg', description: 'Creative wall-mounted or desk key holder serving as a perfect return gift.', features: ['Creative concept', 'Return gift ready', 'Practical utility'] },
                { id: 'gift-7', name: 'Minimalist Planter', price: 1199, image: 'gif7.jpg', description: 'Sleek tabletop planter designed for small succulents and desktop greens.', features: ['Minimalist look', 'Tabletop friendly', 'Chic surface'] },
                { id: 'gift-8', name: 'Award Trophy', price: 1899, image: 'gift8.jpg', description: 'Customizable 3D printed trophy base suitable for corporate honors and events.', features: ['Corporate honor', 'Customizable crest', 'Collector tier'] },
                { id: 'gift-10', name: 'Luminous Lamp Shade', price: 2199, image: 'gift10.jpg', description: 'Intricate lamp shade that casts beautiful patterned shadows.', features: ['Luminous quality', 'Beautiful shadows', 'Home decor fit'] },
                { id: 'gift-11', name: 'Signature Collectible', price: 1799, image: 'gift11.jpg', description: 'The signature MISD 3D printed collectible providing maximum visual impact.', features: ['Signature item', 'Maximum quality', 'Visual impact'] },
                { id: 'gift-12', name: 'Lithophane 1', price: 1799, image: 'lightgift1.png', description: 'Lithophane Frame Light Box with Fairy Lights.', features: ['Signature item', 'Maximum quality', 'Visual impact'] },
                { id: 'gift-13', name: 'Lithophane 2', price: 1799, image: 'lightgift2.png', description: 'Lithophane LightBox with LED-Strip .', features: ['Signature item', 'Maximum quality', 'Visual impact'] }

            ]
        }
    };

    const clone = (value) => JSON.parse(JSON.stringify(value));
    const makeId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const normalizeStoreItem = (item, prefix) => ({
        id: item && item.id ? item.id : makeId(prefix),
        name: item && item.name ? item.name : '',
        price: item && typeof item.price === 'number' ? item.price : Number(item && item.price) || 0,
        image: item && item.image ? item.image : '',
        description: item && item.description ? item.description : '',
        features: Array.isArray(item && item.features) ? item.features : []
    });

    const normalizeProductItem = (item) => ({
        id: item && item.id ? item.id : makeId('product'),
        name: item && item.name ? item.name : '',
        category: item && item.category ? item.category : 'Product',
        year: item && item.year ? item.year : '',
        description: item && item.description ? item.description : '',
        image: item && item.image ? item.image : '',
        link: item && item.link ? item.link : '#',
        icon: item && item.icon ? item.icon : 'precision_manufacturing',
        tag: item && item.tag ? item.tag : 'MISD',
        imageFit: item && item.imageFit === 'contain' ? 'contain' : 'cover'
    });

    const normalizeState = (state) => {
        const raw = state && typeof state === 'object' ? state : {};
        return {
            productsPage: Array.isArray(raw.productsPage) && raw.productsPage.length > 0
                ? raw.productsPage.map(normalizeProductItem)
                : clone(DEFAULT_STATE.productsPage),
            store: {
                keychain: Array.isArray(raw.store && raw.store.keychain) ? raw.store.keychain.map((item) => normalizeStoreItem(item, 'keychain')) : clone(DEFAULT_STATE.store.keychain),
                toys: Array.isArray(raw.store && raw.store.toys) ? raw.store.toys.map((item) => normalizeStoreItem(item, 'toy')) : clone(DEFAULT_STATE.store.toys),
                gifts: Array.isArray(raw.store && raw.store.gifts) ? raw.store.gifts.map((item) => normalizeStoreItem(item, 'gift')) : clone(DEFAULT_STATE.store.gifts)
            }
        };
    };

    const getCatalogState = () => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                return clone(DEFAULT_STATE);
            }

            const parsed = JSON.parse(stored);

            // Migrate: Auto-inject the new 11 gift items if the user hasn't received them yet
            if (!parsed._giftsV2Added) {
                if (!parsed.store) parsed.store = {};
                // Only populate if they literally have 0 gifts so we don't wipe out their work if they manually added 1 gift today
                if (!parsed.store.gifts || parsed.store.gifts.length === 0) {
                    parsed.store.gifts = clone(DEFAULT_STATE.store.gifts);
                }
                parsed._giftsV2Added = true;
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            }

            if (!parsed._giftsV3FixedImagePaths) {
                if (parsed.store && Array.isArray(parsed.store.gifts)) {
                    parsed.store.gifts.forEach(gift => {
                        if (gift.id === 'gift-10' && gift.image === 'gif10.jpg') gift.image = 'gift10.jpg';
                        if (gift.id === 'gift-11' && gift.image === 'gif11.jpg') gift.image = 'gift11.jpg';
                        if (gift.id === 'gift-9' && gift.image === 'gif9.jpg') gift.image = '';
                    });
                }
                parsed._giftsV3FixedImagePaths = true;
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            }

            if (!parsed._trainerImageFix) {
                if (Array.isArray(parsed.productsPage)) {
                    parsed.productsPage.forEach(p => {
                        if (p.id === 'product-trainer-kit' && p.image === './trainingkit.jpeg') {
                            p.image = './TRainer.jpeg';
                        }
                    });
                }
                parsed._trainerImageFix = true;
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            }

            if (!parsed._fpvImageFix) {
                if (Array.isArray(parsed.productsPage)) {
                    parsed.productsPage.forEach(p => {
                        if (p.id === 'product-fpv-racing' && p.image === './FPV RACING DRONE.jpg') {
                            p.image = './fpv.jpeg';
                        }
                    });
                }
                parsed._fpvImageFix = true;
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            }

            return normalizeState(parsed);
        } catch (error) {
            return clone(DEFAULT_STATE);
        }
    };

    const saveCatalogState = (state) => {
        const normalized = normalizeState(state);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        window.dispatchEvent(new CustomEvent('misd:catalog-updated', { detail: clone(normalized) }));
    };

    const resetCatalogState = () => {
        window.localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new CustomEvent('misd:catalog-updated', { detail: clone(DEFAULT_STATE) }));
    };

    const ensureAdminPanel = () => {
        if (document.getElementById('misd-admin-overlay')) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'misd-admin-overlay';
        overlay.className = 'fixed inset-0 z-[140] hidden bg-black/75 px-4 py-6 md:px-8';
        overlay.innerHTML = `
            <div class="flex min-h-full items-center justify-center">
                <div id="misd-admin-panel" class="w-full max-w-7xl bg-white text-black border border-black/10 shadow-2xl">
                    <div class="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-4">
                        <div>
                            <p class="font-label text-[10px] uppercase tracking-[0.3em] text-primary">MISD Admin</p>
                            <h2 class="font-header text-3xl uppercase">Catalog Control Panel</h2>
                        </div>
                        <button id="misd-admin-close" type="button" class="border border-black/20 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Close</button>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
                        <aside class="border-r border-black/10 p-6 space-y-5 bg-gray-50">
                            <div class="space-y-2">
                                <label class="block text-[11px] font-bold uppercase tracking-widest">Catalog</label>
                                <select id="misd-admin-dataset" class="w-full border border-black/20 px-3 py-3 text-sm">
                                    <option value="productsPage">Products Page</option>
                                    <option value="store">3D Store</option>
                                </select>
                            </div>
                            <div id="misd-store-category-wrap" class="space-y-2">
                                <label class="block text-[11px] font-bold uppercase tracking-widest">Store Section</label>
                                <select id="misd-admin-store-category" class="w-full border border-black/20 px-3 py-3 text-sm">
                                    <option value="keychain">Keychain</option>
                                    <option value="toys">Toys</option>
                                    <option value="gifts">Gifts</option>
                                </select>
                            </div>
                            <div class="flex gap-3">
                                <button id="misd-admin-new" type="button" class="flex-1 bg-black text-white px-4 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">New Item</button>
                                <button id="misd-admin-reset" type="button" class="flex-1 border border-black/20 px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Reset Data</button>
                            </div>
                            <div>
                                <p class="text-[11px] font-bold uppercase tracking-widest mb-3">Existing Items</p>
                                <div id="misd-admin-item-list" class="max-h-[52vh] overflow-y-auto space-y-2 pr-1"></div>
                            </div>
                        </aside>
                        <section class="p-6">
                            <form id="misd-admin-form" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="hidden" id="misd-admin-item-id" />
                                <div class="md:col-span-2">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Name</label>
                                    <input id="misd-admin-name" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div id="misd-product-category-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Category</label>
                                    <input id="misd-admin-category" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div id="misd-product-year-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Year</label>
                                    <input id="misd-admin-year" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div class="md:col-span-2">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Description</label>
                                    <textarea id="misd-admin-description" class="w-full border border-black/20 px-3 py-3 text-sm min-h-[120px]"></textarea>
                                </div>
                                <div class="md:col-span-2">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Image URL or Path</label>
                                    <input id="misd-admin-image" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div class="md:col-span-2">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Upload Image</label>
                                    <input id="misd-admin-image-file" class="w-full border border-black/20 px-3 py-3 text-sm" type="file" accept="image/*" />
                                </div>
                                <div id="misd-product-link-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Product Link</label>
                                    <input id="misd-admin-link" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div id="misd-store-price-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Price</label>
                                    <input id="misd-admin-price" class="w-full border border-black/20 px-3 py-3 text-sm" type="number" min="0" />
                                </div>
                                <div id="misd-product-icon-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Material Icon</label>
                                    <input id="misd-admin-icon" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div id="misd-product-tag-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Bottom Tag</label>
                                    <input id="misd-admin-tag" class="w-full border border-black/20 px-3 py-3 text-sm" type="text" />
                                </div>
                                <div id="misd-product-fit-wrap">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Image Fit</label>
                                    <select id="misd-admin-image-fit" class="w-full border border-black/20 px-3 py-3 text-sm">
                                        <option value="cover">Cover</option>
                                        <option value="contain">Contain</option>
                                    </select>
                                </div>
                                <div id="misd-store-features-wrap" class="md:col-span-2">
                                    <label class="block text-[11px] font-bold uppercase tracking-widest mb-2">Store Features</label>
                                    <textarea id="misd-admin-features" class="w-full border border-black/20 px-3 py-3 text-sm min-h-[120px]" placeholder="One feature per line"></textarea>
                                </div>
                                <div class="md:col-span-2">
                                    <div class="border border-dashed border-black/20 p-4">
                                        <p class="text-[11px] font-bold uppercase tracking-widest mb-3">Image Preview</p>
                                        <img id="misd-admin-image-preview" class="max-h-56 w-full object-contain bg-gray-50" src="" alt="" />
                                    </div>
                                </div>
                                <div class="md:col-span-2 flex flex-wrap gap-3">
                                    <button id="misd-admin-save" type="submit" class="bg-primary text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Save Item</button>
                                    <button id="misd-admin-delete" type="button" class="border border-black/20 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Delete Item</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const elements = {
            overlay,
            panel: document.getElementById('misd-admin-panel'),
            close: document.getElementById('misd-admin-close'),
            dataset: document.getElementById('misd-admin-dataset'),
            storeCategory: document.getElementById('misd-admin-store-category'),
            storeCategoryWrap: document.getElementById('misd-store-category-wrap'),
            itemList: document.getElementById('misd-admin-item-list'),
            form: document.getElementById('misd-admin-form'),
            itemId: document.getElementById('misd-admin-item-id'),
            name: document.getElementById('misd-admin-name'),
            category: document.getElementById('misd-admin-category'),
            year: document.getElementById('misd-admin-year'),
            description: document.getElementById('misd-admin-description'),
            image: document.getElementById('misd-admin-image'),
            imageFile: document.getElementById('misd-admin-image-file'),
            link: document.getElementById('misd-admin-link'),
            price: document.getElementById('misd-admin-price'),
            icon: document.getElementById('misd-admin-icon'),
            tag: document.getElementById('misd-admin-tag'),
            imageFit: document.getElementById('misd-admin-image-fit'),
            features: document.getElementById('misd-admin-features'),
            preview: document.getElementById('misd-admin-image-preview'),
            save: document.getElementById('misd-admin-save'),
            remove: document.getElementById('misd-admin-delete'),
            newItem: document.getElementById('misd-admin-new'),
            reset: document.getElementById('misd-admin-reset'),
            productCategoryWrap: document.getElementById('misd-product-category-wrap'),
            productYearWrap: document.getElementById('misd-product-year-wrap'),
            productLinkWrap: document.getElementById('misd-product-link-wrap'),
            productIconWrap: document.getElementById('misd-product-icon-wrap'),
            productTagWrap: document.getElementById('misd-product-tag-wrap'),
            productFitWrap: document.getElementById('misd-product-fit-wrap'),
            storePriceWrap: document.getElementById('misd-store-price-wrap'),
            storeFeaturesWrap: document.getElementById('misd-store-features-wrap')
        };

        const state = { dataset: 'productsPage', storeCategory: 'keychain', selectedId: '' };

        const updatePreview = () => {
            elements.preview.src = elements.image.value || '';
        };

        const clearForm = () => {
            state.selectedId = '';
            elements.itemId.value = '';
            elements.name.value = '';
            elements.category.value = '';
            elements.year.value = '';
            elements.description.value = '';
            elements.image.value = '';
            elements.link.value = '';
            elements.price.value = '';
            elements.icon.value = '';
            elements.tag.value = '';
            elements.imageFit.value = 'cover';
            elements.features.value = '';
            elements.imageFile.value = '';
            updatePreview();
        };

        const getItems = () => {
            const catalogState = getCatalogState();
            if (state.dataset === 'productsPage') {
                return catalogState.productsPage;
            }
            return catalogState.store[state.storeCategory];
        };

        const renderList = () => {
            const items = getItems();
            elements.itemList.innerHTML = items.length > 0
                ? items.map((item) => {
                    const meta = state.dataset === 'productsPage'
                        ? `${item.category} ${item.year ? `• ${item.year}` : ''}`
                        : `${state.storeCategory} • INR ${item.price || 0}`;
                    const activeClass = item.id === state.selectedId ? 'border-primary bg-primary/5' : 'border-black/10 bg-white';
                    return `
                        <div data-item-id="${item.id}"
                            class="w-full border ${activeClass} p-3 text-left transition-colors hover:border-primary flex justify-between items-center group cursor-pointer">
                            <div>
                                <p class="font-header text-lg uppercase">${item.name || 'Untitled Item'}</p>
                                <p class="text-[11px] uppercase tracking-widest text-gray-500 mt-1">${meta}</p>
                            </div>
                            <button type="button" class="bg-primary text-white px-3 py-1 font-bold text-[10px] uppercase tracking-widest shadow-sm hover:opacity-80">Edit</button>
                        </div>
                    `;
                }).join('')
                : '<div class="border border-dashed border-black/20 p-4 text-sm text-gray-500">No items in this section yet.</div>';
        };

        const updateFieldVisibility = () => {
            const storeMode = state.dataset === 'store';
            elements.storeCategoryWrap.classList.toggle('hidden', !storeMode);
            elements.storePriceWrap.classList.toggle('hidden', !storeMode);
            elements.storeFeaturesWrap.classList.toggle('hidden', !storeMode);
            elements.productCategoryWrap.classList.toggle('hidden', storeMode);
            elements.productYearWrap.classList.toggle('hidden', storeMode);
            elements.productLinkWrap.classList.toggle('hidden', storeMode);
            elements.productIconWrap.classList.toggle('hidden', storeMode);
            elements.productTagWrap.classList.toggle('hidden', storeMode);
            elements.productFitWrap.classList.toggle('hidden', storeMode);
        };

        const fillForm = (item) => {
            state.selectedId = item.id;
            elements.itemId.value = item.id;
            elements.name.value = item.name || '';
            elements.description.value = item.description || '';
            elements.image.value = item.image || '';
            elements.price.value = state.dataset === 'store' ? String(item.price || 0) : '';
            elements.features.value = state.dataset === 'store' ? (item.features || []).join('\n') : '';
            elements.category.value = state.dataset === 'productsPage' ? (item.category || '') : '';
            elements.year.value = state.dataset === 'productsPage' ? (item.year || '') : '';
            elements.link.value = state.dataset === 'productsPage' ? (item.link || '') : '';
            elements.icon.value = state.dataset === 'productsPage' ? (item.icon || '') : '';
            elements.tag.value = state.dataset === 'productsPage' ? (item.tag || '') : '';
            elements.imageFit.value = state.dataset === 'productsPage' ? (item.imageFit || 'cover') : 'cover';

            elements.save.textContent = 'Update Existing Item';
            elements.save.classList.add('bg-black', 'text-white');
            elements.save.classList.remove('bg-primary');

            updatePreview();
            renderList();
        };

        const saveCurrentItem = () => {
            const catalogState = getCatalogState();
            const id = elements.itemId.value || makeId(state.dataset === 'store' ? state.storeCategory : 'product');

            if (state.dataset === 'productsPage') {
                const nextItem = normalizeProductItem({
                    id,
                    name: elements.name.value.trim(),
                    category: elements.category.value.trim(),
                    year: elements.year.value.trim(),
                    description: elements.description.value.trim(),
                    image: elements.image.value.trim(),
                    link: elements.link.value.trim(),
                    icon: elements.icon.value.trim(),
                    tag: elements.tag.value.trim(),
                    imageFit: elements.imageFit.value
                });

                const index = catalogState.productsPage.findIndex((item) => item.id === id);
                if (index >= 0) {
                    catalogState.productsPage[index] = nextItem;
                } else {
                    catalogState.productsPage.push(nextItem);
                }
            } else {
                const nextItem = normalizeStoreItem({
                    id,
                    name: elements.name.value.trim(),
                    price: Number(elements.price.value) || 0,
                    image: elements.image.value.trim(),
                    description: elements.description.value.trim(),
                    features: elements.features.value.split('\n').map((value) => value.trim()).filter(Boolean)
                }, state.storeCategory);
                const items = catalogState.store[state.storeCategory];
                const index = items.findIndex((item) => String(item.id) === String(id));
                if (index >= 0) {
                    items[index] = nextItem;
                } else {
                    items.push(nextItem);
                }
            }

            saveCatalogState(catalogState);
            state.selectedId = id;
            fillForm(state.dataset === 'productsPage'
                ? catalogState.productsPage.find(i => String(i.id) === String(id))
                : catalogState.store[state.storeCategory].find(i => String(i.id) === String(id))
            );
        };

        const deleteCurrentItem = () => {
            if (!state.selectedId) {
                return;
            }

            const catalogState = getCatalogState();
            if (state.dataset === 'productsPage') {
                catalogState.productsPage = catalogState.productsPage.filter((item) => String(item.id) !== String(state.selectedId));
            } else {
                catalogState.store[state.storeCategory] = catalogState.store[state.storeCategory].filter((item) => String(item.id) !== String(state.selectedId));
            }

            saveCatalogState(catalogState);
            clearForm();
            renderList();
        };

        const syncPanel = () => {
            elements.dataset.value = state.dataset;
            elements.storeCategory.value = state.storeCategory;
            updateFieldVisibility();
            renderList();
        };

        elements.close.addEventListener('click', () => {
            elements.overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        elements.overlay.addEventListener('click', (event) => {
            if (elements.panel.contains(event.target)) {
                return;
            }
            elements.overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        elements.dataset.addEventListener('change', () => {
            state.dataset = elements.dataset.value;
            state.selectedId = '';
            clearForm();
            syncPanel();
        });

        elements.storeCategory.addEventListener('change', () => {
            state.storeCategory = elements.storeCategory.value;
            state.selectedId = '';
            clearForm();
            syncPanel();
        });

        elements.newItem.addEventListener('click', () => {
            clearForm();
            renderList();
        });

        elements.reset.addEventListener('click', () => {
            resetCatalogState();
            clearForm();
            syncPanel();
        });

        elements.itemList.addEventListener('click', (event) => {
            const button = event.target.closest('[data-item-id]');
            if (!button) {
                return;
            }

            const selectedId = button.getAttribute('data-item-id');
            const selected = getItems().find((item) => String(item.id) === String(selectedId));
            if (!selected) {
                return;
            }

            fillForm(selected);
        });

        elements.image.addEventListener('input', updatePreview);

        elements.imageFile.addEventListener('change', () => {
            const [file] = elements.imageFile.files || [];
            if (!file) {
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                elements.image.value = typeof reader.result === 'string' ? reader.result : '';
                updatePreview();
            };
            reader.readAsDataURL(file);
        });

        elements.save.addEventListener('click', (event) => {
            event.preventDefault();
            saveCurrentItem();
        });

        elements.form.addEventListener('submit', (event) => {
            event.preventDefault();
            saveCurrentItem();
        });

        elements.remove.addEventListener('click', deleteCurrentItem);

        window.addEventListener('misd:catalog-updated', () => {
            syncPanel();
        });

        syncPanel();
    };

    const openAdminPanel = (options) => {
        ensureAdminPanel();
        const overlay = document.getElementById('misd-admin-overlay');
        const dataset = document.getElementById('misd-admin-dataset');
        const storeCategory = document.getElementById('misd-admin-store-category');
        if (!overlay || !dataset || !storeCategory) {
            return;
        }

        dataset.value = options && options.dataset ? options.dataset : 'productsPage';
        dataset.dispatchEvent(new Event('change'));

        if (options && options.storeCategory) {
            storeCategory.value = options.storeCategory;
            storeCategory.dispatchEvent(new Event('change'));
        }

        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const attachAdminTrigger = (options) => {
        let clickCount = 0;
        let navigationTimer = null;

        document.querySelectorAll('[data-admin-logo-trigger]').forEach((element) => {
            if (element.dataset.adminBound === 'true') {
                return;
            }

            element.dataset.adminBound = 'true';
            element.addEventListener('click', (event) => {
                const href = element.getAttribute('href');
                event.preventDefault();
                clickCount += 1;

                if (navigationTimer) {
                    clearTimeout(navigationTimer);
                }

                if (clickCount >= 7) {
                    clickCount = 0;
                    openAdminPanel({
                        dataset: options && options.defaultDataset ? options.defaultDataset : 'productsPage',
                        storeCategory: options && options.defaultStoreCategory ? options.defaultStoreCategory : 'keychain'
                    });
                    return;
                }

                navigationTimer = window.setTimeout(() => {
                    clickCount = 0;
                    if (href && href !== '#') {
                        window.location.href = href;
                    }
                }, CLICK_WINDOW_MS);
            });
        });
    };

    window.MISDCatalogAdmin = {
        getCatalogState,
        saveCatalogState,
        resetCatalogState,
        openAdminPanel,
        attachAdminTrigger
    };
})();
