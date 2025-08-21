// Animation sequence timing
const ANIMATION_TIMING = {
    version: 2500,
    credits: 2500,
    loading: 3500
};

// Link categories data with enhanced descriptions
const LINK_CATEGORIES = {
    social: {
        title: 'Lunar',
        icon: '🌑',
        links: [
            { name: 'Lunar', url: 'https://example.com', description: 'Coming soon', category: 'Moon' },
            
        ]
    },
    work: {
        title: 'WORK PROTOCOL',
        icon: '💼',
        links: [
            { name: 'Gmail', url: 'https://gmail.com', description: 'Quantum email interface', category: 'work' },
            { name: 'Google Drive', url: 'https://drive.google.com', description: 'Cloud storage matrix', category: 'work' },
            { name: 'Microsoft Teams', url: 'https://teams.microsoft.com', description: 'Team synchronization hub', category: 'work' },
            { name: 'Slack', url: 'https://slack.com', description: 'Workspace communication grid', category: 'work' },
            { name: 'Zoom', url: 'https://zoom.us', description: 'Virtual meeting dimension', category: 'work' },
            { name: 'Trello', url: 'https://trello.com', description: 'Project management system', category: 'work' }
        ]
    },
    entertainment: {
        title: 'ENTERTAINMENT HUB',
        icon: '🎮',
        links: [
            { name: 'YouTube', url: 'https://youtube.com', description: 'Video streaming matrix', category: 'entertainment' },
            { name: 'Netflix', url: 'https://netflix.com', description: 'Premium content portal', category: 'entertainment' },
            { name: 'Spotify', url: 'https://spotify.com', description: 'Audio frequency database', category: 'entertainment' },
            { name: 'Twitch', url: 'https://twitch.tv', description: 'Live stream dimension', category: 'entertainment' },
            { name: 'Steam', url: 'https://store.steampowered.com', description: 'Gaming universe gateway', category: 'entertainment' },
            { name: 'IMDb', url: 'https://imdb.com', description: 'Media information nexus', category: 'entertainment' }
        ]
    },
    education: {
        title: '55gms',
        icon: '📚',
        links: [
            { name: '55gms', url: 'https://imurdered57people27bodiesfoundand30missing.freestockphotos.pics/', description: 'good site for games', category: '55gms' },
            { name: '55gms', url: 'https://xn--o38h.freestockphotos.pics/', description: 'good site for games', category: '55gms' },
            { name: '55gms', url: 'http://jkarontop.hidemymoneysite.com/', description: 'good site for games', category: '55gms' },
            
        ]
    },
    shopping: {
        title: 'COMMERCE ZONE',
        icon: '🛒',
        links: [
            { name: 'Amazon', url: 'https://amazon.com', description: 'Universal marketplace', category: 'shopping' },
            { name: 'eBay', url: 'https://ebay.com', description: 'Auction dimension portal', category: 'shopping' },
            { name: 'Etsy', url: 'https://etsy.com', description: 'Artisan creation network', category: 'shopping' },
            { name: 'Best Buy', url: 'https://bestbuy.com', description: 'Electronics distribution hub', category: 'shopping' },
            { name: 'Target', url: 'https://target.com', description: 'Retail acquisition center', category: 'shopping' },
            { name: 'Walmart', url: 'https://walmart.com', description: 'Mass market interface', category: 'shopping' }
        ]
    },
    custom: {
        title: 'CUSTOM LINKS',
        icon: '🔧',
        links: [
            { name: 'Google', url: 'https://google.com', description: 'Universal search protocol', category: 'custom' },
            { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Developer knowledge matrix', category: 'custom' },
            { name: 'CodePen', url: 'https://codepen.io', description: 'Code experimentation lab', category: 'custom' },
            { name: 'Replit', url: 'https://replit.com', description: 'Cloud development environment', category: 'custom' },
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Web technology database', category: 'custom' },
            { name: 'Can I Use', url: 'https://caniuse.com', description: 'Browser compatibility scanner', category: 'custom' }
        ]
    }
};

// State management
let currentCategory = null;
let animationsEnabled = true;
let soundEnabled = false;
let favorites = [];
let recentLinks = [];
let analytics = {
    totalClicks: 0,
    categoryClicks: {},
    sessionStart: Date.now()
};
let activeTab = 'links';
let activeSettingsTab = 'appearance';
// Tab system variables
let tabs = [];
let activeTabId = null;
let tabIdCounter = 1;
let contextMenu = null;
let contextTarget = null;
let settings = {
    animationSpeed: 1,
    backgroundOpacity: 0.8,
    openInNewTab: true,
    confirmBeforeLeaving: false,
    defaultCategory: '',
    developerMode: false,
    debugMode: false,
    maxRecentLinks: 10,
    customCSS: ''
};

// DOM elements
const elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    startOpeningSequence();
    setupEventListeners();
    loadSettings();
    initializeAnalytics();
    initializeTabSystem();
    updateSessionTimer();
});

// Navigation Functions
function showFavorites() {
    elements.categoryPopup.classList.add('hidden');
    elements.linksContainer.classList.add('hidden');
    elements.tabNavigation.classList.remove('hidden');
    switchTab('favorites');
}

function showHome() {
    switchTab('links');
    showCategoryPopup();
}

function initializeElements() {
    elements.animationContainer = document.getElementById('animationContainer');
    elements.versionScreen = document.getElementById('versionScreen');
    elements.creditsScreen = document.getElementById('creditsScreen');
    elements.loadingScreen = document.getElementById('loadingScreen');
    elements.mainApp = document.getElementById('mainApp');
    elements.categoryPopup = document.getElementById('categoryPopup');
    elements.linksContainer = document.getElementById('linksContainer');
    elements.settingsPanel = document.getElementById('settingsPanel');
    elements.tabNavigation = document.getElementById('tabNavigation');
}

function startOpeningSequence() {
    if (!animationsEnabled) {
        showMainApp();
        return;
    }

    // Enhanced animation sequence
    setTimeout(() => {
        elements.versionScreen.classList.add('hidden');
        elements.creditsScreen.classList.remove('hidden');
    }, ANIMATION_TIMING.version);

    setTimeout(() => {
        elements.creditsScreen.classList.add('hidden');
        elements.loadingScreen.classList.remove('hidden');
        initializeLoadingScreen();
    }, ANIMATION_TIMING.version + ANIMATION_TIMING.credits);

    setTimeout(() => {
        showMainApp();
    }, ANIMATION_TIMING.version + ANIMATION_TIMING.credits + ANIMATION_TIMING.loading);
}

function initializeLoadingScreen() {
    // Create loading grid cells
    const loadingGrid = document.getElementById('loadingGrid');
    if (loadingGrid) {
        loadingGrid.innerHTML = '';
        for (let i = 0; i < 24; i++) {
            const cell = document.createElement('div');
            cell.className = 'loading-cell';
            cell.style.setProperty('--i', i);
            loadingGrid.appendChild(cell);
        }
    }

    // Animate loading status updates
    const statusTexts = [
        'Initializing Neural Networks...',
        'Connecting to Quantum Servers...',
        'Loading Link Database...',
        'Establishing Secure Channels...',
        'Optimizing Performance...',
        'Finalizing Matrix Access...'
    ];

    const statusElement = document.getElementById('loadingStatus');
    const status2 = document.getElementById('status2');
    const status3 = document.getElementById('status3');
    const status4 = document.getElementById('status4');

    let currentStatus = 0;

    const updateStatus = () => {
        if (currentStatus < statusTexts.length) {
            if (statusElement) {
                statusElement.textContent = statusTexts[currentStatus];
            }
            
            // Activate status indicators progressively
            if (currentStatus === 1 && status2) {
                status2.classList.add('active');
            } else if (currentStatus === 3 && status3) {
                status3.classList.add('active');
            } else if (currentStatus === 5 && status4) {
                status4.classList.add('active');
            }
            
            currentStatus++;
        }
    };

    // Update status every 600ms
    const statusInterval = setInterval(updateStatus, 600);
    
    // Clear interval when loading is complete
    setTimeout(() => {
        clearInterval(statusInterval);
    }, ANIMATION_TIMING.loading - 100);

    // Animate grid cells randomly
    if (loadingGrid) {
        const cells = loadingGrid.querySelectorAll('.loading-cell');
        const animateCell = () => {
            const randomCell = cells[Math.floor(Math.random() * cells.length)];
            if (randomCell) {
                randomCell.classList.add('active');
                setTimeout(() => {
                    randomCell.classList.remove('active');
                }, 500);
            }
        };

        // Animate cells at random intervals
        const cellInterval = setInterval(() => {
            animateCell();
            // Sometimes animate multiple cells
            if (Math.random() > 0.7) {
                setTimeout(animateCell, 100);
            }
        }, 200);

        // Clear cell animation when loading is complete
        setTimeout(() => {
            clearInterval(cellInterval);
        }, ANIMATION_TIMING.loading - 100);
    }
}

function showMainApp() {
    elements.animationContainer.classList.add('hidden');
    elements.mainApp.classList.remove('hidden');
    document.body.style.overflow = 'auto';
    showCategoryPopup();
}

function showCategoryPopup() {
    elements.categoryPopup.classList.remove('hidden');
    elements.linksContainer.classList.add('hidden');
    elements.tabNavigation.classList.remove('hidden');
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Show links tab
    document.getElementById('linksTab').classList.remove('hidden');
}

function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            showLinksForCategory(category);
        });
    });

    // Navigation buttons
    document.getElementById('favoritesBtn').addEventListener('click', showFavorites);
    
    // Tab system event listeners
    document.getElementById('addTabBtn').addEventListener('click', createNewTab);
    document.querySelector('.tabs-container').addEventListener('click', handleTabClick);

    // Settings tab navigation
    document.querySelectorAll('.settings-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const settingsTab = e.target.dataset.settingsTab;
            switchSettingsTab(settingsTab);
        });
    });

    document.getElementById('homeBtn').addEventListener('click', showHome);
    document.getElementById('settingsBtn').addEventListener('click', toggleSettings);
    document.getElementById('closeSettings').addEventListener('click', toggleSettings);
    document.getElementById('backBtn').addEventListener('click', () => {
        elements.linksContainer.classList.add('hidden');
        showCategoryPopup();
    });

    // Basic Settings
    document.getElementById('themeSelect').addEventListener('change', changeTheme);
    document.getElementById('animationsToggle').addEventListener('change', toggleAnimations);
    document.getElementById('soundToggle').addEventListener('change', toggleSound);
    document.getElementById('autoSave').addEventListener('change', toggleAutoSave);

    // Enhanced Settings
    setupEnhancedSettings();

    // Data Management
    document.getElementById('exportFavorites').addEventListener('click', exportFavorites);
    document.getElementById('importFavorites').addEventListener('click', importFavorites);
    document.getElementById('clearFavorites').addEventListener('click', clearFavorites);
    document.getElementById('clearRecent').addEventListener('click', clearRecentLinks);
    document.getElementById('resetAnalytics').addEventListener('click', resetAnalytics);

    // Context Menu
    contextMenu = document.getElementById('contextMenu');
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', hideContextMenu);

    // Context Menu Items
    document.getElementById('favoriteItem').addEventListener('click', handleContextFavorite);
    document.getElementById('openNewTab').addEventListener('click', handleContextNewTab);
    document.getElementById('copyLink').addEventListener('click', handleContextCopy);

    // Close popup when clicking outside
    elements.categoryPopup.addEventListener('click', (e) => {
        if (e.target === elements.categoryPopup) {
            elements.categoryPopup.classList.add('hidden');
        }
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

function switchTab(tabName) {
    activeTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Show selected tab content
    const targetTab = document.getElementById(tabName + 'Tab');
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }

    // Load specific tab data
    switch(tabName) {
        case 'favorites':
            loadFavorites();
            break;
        case 'recent':
            loadRecentLinks();
            break;
        case 'analytics':
            updateAnalytics();
            break;
    }
}

function showLinksForCategory(category) {
    currentCategory = category;
    const categoryData = LINK_CATEGORIES[category];

    if (!categoryData) return;

    // Hide popup and show links container
    elements.categoryPopup.classList.add('hidden');
    elements.linksContainer.classList.remove('hidden');
    elements.tabNavigation.classList.remove('hidden');
    
    // Update active tab content
    if (activeTabId) {
        updateTabContent(activeTabId, category, categoryData.icon + ' ' + categoryData.title);
    }

    // Update category title
    document.getElementById('categoryTitle').textContent = categoryData.title;

    // Clear and populate links grid
    const linksGrid = document.getElementById('linksGrid');
    linksGrid.innerHTML = '';

    categoryData.links.forEach(link => {
        const linkCard = createLinkCard(link);
        linksGrid.appendChild(linkCard);
    });

    // Update analytics
    analytics.categoryClicks[category] = (analytics.categoryClicks[category] || 0) + 1;
}

function createLinkCard(link) {
    const linkCard = document.createElement('div');
    linkCard.className = 'link-card';
    linkCard.style.cursor = 'pointer';
    linkCard.dataset.url = link.url;
    linkCard.dataset.name = link.name;
    linkCard.dataset.description = link.description;

    const isFavorite = favorites.some(fav => fav.url === link.url);

    linkCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
            <h4>${link.name}</h4>
            <button class="favorite-btn" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: ${isFavorite ? '#FFD700' : 'rgba(255,255,255,0.5)'};">
                ${isFavorite ? '⭐' : '☆'}
            </button>
        </div>
        <p>${link.description}</p>
    `;

    // Add click handler for link (left click)
    linkCard.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn') && e.button === 0) {
            openLink(link);
        }
    });

    // Prevent context menu on favorite button
    const favoriteBtn = linkCard.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(link, favoriteBtn);
    });

    favoriteBtn.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    return linkCard;
}

function switchSettingsTab(tabName) {
    activeSettingsTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.settings-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.settingsTab === tabName);
    });

    // Hide all settings tab contents
    document.querySelectorAll('.settings-tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Show selected settings tab content
    const targetTab = document.getElementById(tabName + 'Settings');
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }
}

function setupEnhancedSettings() {
    // Animation Speed
    const animationSpeed = document.getElementById('animationSpeed');
    const animationSpeedValue = document.getElementById('animationSpeedValue');
    animationSpeed.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        settings.animationSpeed = speed;
        animationSpeedValue.textContent = speed + 'x';
        document.documentElement.style.setProperty('--animation-speed', speed);
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    // Background Opacity
    const backgroundOpacity = document.getElementById('backgroundOpacity');
    const backgroundOpacityValue = document.getElementById('backgroundOpacityValue');
    backgroundOpacity.addEventListener('input', (e) => {
        const opacity = parseFloat(e.target.value);
        settings.backgroundOpacity = opacity;
        backgroundOpacityValue.textContent = Math.round(opacity * 100) + '%';
        document.documentElement.style.setProperty('--bg-opacity', opacity);
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    // Other settings
    document.getElementById('openInNewTab').addEventListener('change', (e) => {
        settings.openInNewTab = e.target.checked;
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('confirmBeforeLeaving').addEventListener('change', (e) => {
        settings.confirmBeforeLeaving = e.target.checked;
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('defaultCategory').addEventListener('change', (e) => {
        settings.defaultCategory = e.target.value;
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('developerMode').addEventListener('change', (e) => {
        settings.developerMode = e.target.checked;
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('debugMode').addEventListener('change', (e) => {
        settings.debugMode = e.target.checked;
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('maxRecentLinks').addEventListener('change', (e) => {
        settings.maxRecentLinks = parseInt(e.target.value);
        if (document.getElementById('autoSave').checked) saveSettings();
    });

    document.getElementById('customCSS').addEventListener('input', (e) => {
        settings.customCSS = e.target.value;
        applyCustomCSS(e.target.value);
        if (document.getElementById('autoSave').checked) saveSettings();
    });
}

function handleContextMenu(e) {
    const linkCard = e.target.closest('.link-card');
    if (!linkCard || !linkCard.dataset.url) return;

    e.preventDefault();
    contextTarget = linkCard;

    const isFavorite = favorites.some(fav => fav.url === linkCard.dataset.url);
    const favoriteItem = document.getElementById('favoriteItem');

    if (isFavorite) {
        favoriteItem.innerHTML = '<span>💔</span><span>Remove from Favorites</span>';
        favoriteItem.className = 'context-menu-item unfavorite';
    } else {
        favoriteItem.innerHTML = '<span>⭐</span><span>Add to Favorites</span>';
        favoriteItem.className = 'context-menu-item favorite';
    }

    contextMenu.style.left = e.clientX + 'px';
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.classList.add('active');
}

function hideContextMenu() {
    if (contextMenu) {
        contextMenu.classList.remove('active');
        contextTarget = null;
    }
}

function handleContextFavorite() {
    if (!contextTarget) return;

    const link = {
        name: contextTarget.dataset.name,
        url: contextTarget.dataset.url,
        description: contextTarget.dataset.description
    };

    const favoriteBtn = contextTarget.querySelector('.favorite-btn');
    toggleFavorite(link, favoriteBtn);
    hideContextMenu();
}

function handleContextNewTab() {
    if (!contextTarget) return;

    const link = {
        name: contextTarget.dataset.name,
        url: contextTarget.dataset.url,
        description: contextTarget.dataset.description
    };

    window.open(link.url, '_blank', 'noopener noreferrer');

    // Add to recent links
    recentLinks.unshift({...link, timestamp: Date.now()});
    recentLinks = recentLinks.slice(0, settings.maxRecentLinks);
    analytics.totalClicks++;

    if (document.getElementById('autoSave').checked) saveSettings();
    hideContextMenu();
}

function handleContextCopy() {
    if (!contextTarget) return;

    navigator.clipboard.writeText(contextTarget.dataset.url).then(() => {
        // Could add a toast notification here
        console.log('Link copied to clipboard');
    });

    hideContextMenu();
}

function exportFavorites() {
    const data = JSON.stringify(favorites, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jkars-link-vault-favorites.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importFavorites() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedFavorites = JSON.parse(event.target.result);
                if (Array.isArray(importedFavorites)) {
                    favorites = [...favorites, ...importedFavorites];
                    // Remove duplicates
                    favorites = favorites.filter((fav, index, self) => 
                        index === self.findIndex(f => f.url === fav.url)
                    );
                    updateFavoritesCount();
                    if (document.getElementById('autoSave').checked) saveSettings();
                }
            } catch (error) {
                console.error('Error importing favorites:', error);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearFavorites() {
    if (confirm('Are you sure you want to clear all favorites?')) {
        favorites = [];
        updateFavoritesCount();
        if (document.getElementById('autoSave').checked) saveSettings();
        // Refresh current view if showing favorites
        if (activeTab === 'favorites') loadFavorites();
    }
}

function clearRecentLinks() {
    if (confirm('Are you sure you want to clear recent links?')) {
        recentLinks = [];
        updateRecentCount();
        if (document.getElementById('autoSave').checked) saveSettings();
        // Refresh current view if showing recent
        if (activeTab === 'recent') loadRecentLinks();
    }
}

function resetAnalytics() {
    if (confirm('Are you sure you want to reset all analytics data?')) {
        analytics = {
            totalClicks: 0,
            categoryClicks: {},
            sessionStart: Date.now()
        };
        if (document.getElementById('autoSave').checked) saveSettings();
        // Refresh analytics view
        if (activeTab === 'analytics') updateAnalytics();
    }
}

function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = favorites.length;
}

function updateRecentCount() {
    document.getElementById('recentCount').textContent = recentLinks.length;
}

function applyCustomCSS(css) {
    let styleElement = document.getElementById('customStyles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'customStyles';
        document.head.appendChild(styleElement);
    }
    styleElement.textContent = css;
}

function handleKeyboardShortcuts(e) {
    // Existing shortcuts...
    if (e.key === 'Escape') {
        if (contextMenu && contextMenu.classList.contains('active')) {
            hideContextMenu();
        } else if (elements.settingsPanel.classList.contains('active')) {
            toggleSettings();
        } else if (!elements.categoryPopup.classList.contains('hidden')) {
            elements.categoryPopup.classList.add('hidden');
        }
    }

    if (e.key === 'h' && e.ctrlKey) {
        e.preventDefault();
        showCategoryPopup();
    }

    // Settings shortcuts
    if (e.key === 's' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        toggleSettings();
    }

    // Tab switching shortcuts
    if (e.ctrlKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const tabs = ['links', 'favorites', 'recent', 'analytics'];
        const tabIndex = parseInt(e.key) - 1;
        if (tabs[tabIndex] && !elements.tabNavigation.classList.contains('hidden')) {
            switchTab(tabs[tabIndex]);
        }
    }
}

function openLink(link) {
    // Add click animation
    analytics.totalClicks++;

    // Add to recent links
    recentLinks.unshift({...link, timestamp: Date.now()});
    recentLinks = recentLinks.slice(0, settings.maxRecentLinks);

    // Save analytics if auto-save is enabled
    if (document.getElementById('autoSave').checked) {
        saveSettings();
    }

    // Open link based on settings
    if (settings.openInNewTab) {
        window.open(link.url, '_blank', 'noopener noreferrer');
    } else {
        window.location.href = link.url;
    }
}

function toggleFavorite(link, button) {
    const existingIndex = favorites.findIndex(fav => fav.url === link.url);

    if (existingIndex > -1) {
        favorites.splice(existingIndex, 1);
        button.textContent = '☆';
        button.style.color = 'rgba(255,255,255,0.5)';
    } else {
        favorites.push({...link, timestamp: Date.now()});
        button.textContent = '⭐';
        button.style.color = '#FFD700';
    }

    if (document.getElementById('autoSave').checked) {
        saveSettings();
    }
}

function loadFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    favoritesGrid.innerHTML = '';

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="link-card" style="opacity: 0.5; cursor: default;">
                <h4>No Favorites Yet</h4>
                <p>Click the ⭐ icon on any link to add it to favorites</p>
            </div>
        `;
        return;
    }

    favorites.forEach(link => {
        const linkCard = createLinkCard(link);
        favoritesGrid.appendChild(linkCard);
    });
}

function loadRecentLinks() {
    const recentGrid = document.getElementById('recentGrid');
    recentGrid.innerHTML = '';

    if (recentLinks.length === 0) {
        recentGrid.innerHTML = `
            <div class="link-card" style="opacity: 0.5; cursor: default;">
                <h4>No Recent Activity</h4>
                <p>Your recently visited links will appear here</p>
            </div>
        `;
        return;
    }

    recentLinks.forEach(link => {
        const linkCard = createLinkCard(link);
        // Add timestamp to recent links
        const timestamp = new Date(link.timestamp).toLocaleString();
        linkCard.querySelector('p').innerHTML += `<br><small style="opacity: 0.6;">Visited: ${timestamp}</small>`;
        recentGrid.appendChild(linkCard);
    });
}

function updateAnalytics() {
    document.getElementById('totalClicks').textContent = analytics.totalClicks;

    // Find most clicked category
    let topCategory = 'None Yet';
    let maxClicks = 0;
    for (const [category, clicks] of Object.entries(analytics.categoryClicks)) {
        if (clicks > maxClicks) {
            maxClicks = clicks;
            topCategory = LINK_CATEGORIES[category]?.title || category;
        }
    }
    document.getElementById('topCategory').textContent = topCategory;
}

function updateSessionTimer() {
    setInterval(() => {
        const elapsed = Date.now() - analytics.sessionStart;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('sessionTime').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function initializeAnalytics() {
    analytics.sessionStart = Date.now();
}

function toggleSettings() {
    elements.settingsPanel.classList.toggle('active');
}

function changeTheme(e) {
    const theme = e.target.value;
    document.body.className = theme;
    if (document.getElementById('autoSave').checked) {
        localStorage.setItem('theme', theme);
    }
}

function toggleAnimations(e) {
    animationsEnabled = e.target.checked;
    if (document.getElementById('autoSave').checked) {
        localStorage.setItem('animationsEnabled', animationsEnabled);
    }
}

function toggleSound(e) {
    soundEnabled = e.target.checked;
    if (document.getElementById('autoSave').checked) {
        localStorage.setItem('soundEnabled', soundEnabled);
    }
}

function toggleAutoSave(e) {
    if (e.target.checked) {
        saveSettings();
    }
    localStorage.setItem('autoSave', e.target.checked);
}

function saveSettings() {
    localStorage.setItem('theme', document.getElementById('themeSelect').value);
    localStorage.setItem('animationsEnabled', animationsEnabled);
    localStorage.setItem('soundEnabled', soundEnabled);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('recentLinks', JSON.stringify(recentLinks));
    localStorage.setItem('analytics', JSON.stringify(analytics));
    localStorage.setItem('settings', JSON.stringify(settings));
}

function loadSettings() {
    // Load theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme;
    document.getElementById('themeSelect').value = savedTheme;

    // Load basic settings
    const savedAnimations = localStorage.getItem('animationsEnabled');
    if (savedAnimations !== null) {
        animationsEnabled = savedAnimations === 'true';
        document.getElementById('animationsToggle').checked = animationsEnabled;
    }

    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
        document.getElementById('soundToggle').checked = soundEnabled;
    }

    const savedAutoSave = localStorage.getItem('autoSave');
    if (savedAutoSave !== null) {
        document.getElementById('autoSave').checked = savedAutoSave === 'true';
    }

    // Load enhanced settings
    try {
        const savedSettings = localStorage.getItem('settings');
        if (savedSettings) {
            const loaded = JSON.parse(savedSettings);
            settings = {...settings, ...loaded};

            // Apply loaded settings
            document.getElementById('animationSpeed').value = settings.animationSpeed;
            document.getElementById('animationSpeedValue').textContent = settings.animationSpeed + 'x';
            document.getElementById('backgroundOpacity').value = settings.backgroundOpacity;
            document.getElementById('backgroundOpacityValue').textContent = Math.round(settings.backgroundOpacity * 100) + '%';
            document.getElementById('openInNewTab').checked = settings.openInNewTab;
            document.getElementById('confirmBeforeLeaving').checked = settings.confirmBeforeLeaving;
            document.getElementById('defaultCategory').value = settings.defaultCategory;
            document.getElementById('developerMode').checked = settings.developerMode;
            document.getElementById('debugMode').checked = settings.debugMode;
            document.getElementById('maxRecentLinks').value = settings.maxRecentLinks;
            document.getElementById('customCSS').value = settings.customCSS;

            // Apply CSS variables
            document.documentElement.style.setProperty('--animation-speed', settings.animationSpeed);
            document.documentElement.style.setProperty('--bg-opacity', settings.backgroundOpacity);

            // Apply custom CSS
            if (settings.customCSS) {
                applyCustomCSS(settings.customCSS);
            }
        }
    } catch (error) {
        console.log('Error loading enhanced settings:', error);
    }

    // Load data
    try {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) favorites = JSON.parse(savedFavorites);

        const savedRecent = localStorage.getItem('recentLinks');
        if (savedRecent) recentLinks = JSON.parse(savedRecent);

        const savedAnalytics = localStorage.getItem('analytics');
        if (savedAnalytics) {
            const loaded = JSON.parse(savedAnalytics);
            analytics = {...analytics, ...loaded};
        }
    } catch (error) {
        console.log('Error loading saved data:', error);
    }

    // Update counts
    updateFavoritesCount();
    updateRecentCount();
}

// Initialize counts and enhanced features
function initializeAnalytics() {
    analytics.sessionStart = Date.now();
    updateFavoritesCount();
    updateRecentCount();
}

// Tab System Functions
function initializeTabSystem() {
    // Create initial tab
    createNewTab('Home', 'links');
}

function createNewTab(title = 'New Tab', type = 'links') {
    const tabId = 'tab_' + tabIdCounter++;
    const tab = {
        id: tabId,
        title: title,
        type: type,
        category: null,
        isActive: false
    };

    tabs.push(tab);
    renderTab(tab);
    switchToTab(tabId);
}

function renderTab(tab) {
    const tabsContainer = document.querySelector('.tabs-container');
    const tabElement = document.createElement('div');
    tabElement.className = 'tab';
    tabElement.dataset.tabId = tab.id;
    
    tabElement.innerHTML = `
        <span class="tab-title">${tab.title}</span>
        <button class="tab-close" onclick="closeTab('${tab.id}')">&times;</button>
    `;
    
    tabsContainer.appendChild(tabElement);
}

function handleTabClick(e) {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    
    if (e.target.classList.contains('tab-close')) {
        e.stopPropagation();
        closeTab(tab.dataset.tabId);
    } else {
        switchToTab(tab.dataset.tabId);
    }
}

function switchToTab(tabId) {
    // Update active tab
    activeTabId = tabId;
    
    // Update tab visual states
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tabId === tabId);
    });
    
    // Update tabs array
    tabs.forEach(tab => {
        tab.isActive = tab.id === tabId;
    });
    
    // Load tab content
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
        loadTabContent(tab);
    }
}

function closeTab(tabId) {
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    if (tabIndex === -1) return;
    
    // Don't close if it's the only tab
    if (tabs.length === 1) return;
    
    const wasActive = tabs[tabIndex].isActive;
    
    // Remove tab from array
    tabs.splice(tabIndex, 1);
    
    // Remove tab element
    const tabElement = document.querySelector(`[data-tab-id="${tabId}"]`);
    if (tabElement) {
        tabElement.remove();
    }
    
    // Switch to another tab if this was active
    if (wasActive && tabs.length > 0) {
        const newActiveTab = tabs[Math.min(tabIndex, tabs.length - 1)];
        switchToTab(newActiveTab.id);
    }
}

function updateTabContent(tabId, category, title) {
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
        tab.category = category;
        tab.title = title;
        
        // Update tab title in DOM
        const tabElement = document.querySelector(`[data-tab-id="${tabId}"] .tab-title`);
        if (tabElement) {
            tabElement.textContent = title;
        }
    }
}

function loadTabContent(tab) {
    if (tab.category) {
        showLinksForCategory(tab.category);
    } else {
        switch(tab.type) {
            case 'favorites':
                switchTab('favorites');
                break;
            case 'recent':
                switchTab('recent');
                break;
            case 'analytics':
                switchTab('analytics');
                break;
            default:
                showCategoryPopup();
        }
    }
}

function showMainApp() {
    elements.animationContainer.classList.add('hidden');
    elements.mainApp.classList.remove('hidden');
    document.body.style.overflow = 'auto';

    // Check if user has set a default category
    if (settings.defaultCategory && LINK_CATEGORIES[settings.defaultCategory]) {
        showLinksForCategory(settings.defaultCategory);
    } else {
        showCategoryPopup();
    }
}
