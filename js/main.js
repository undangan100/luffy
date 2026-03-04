// ==========================================
// ONE PIECE WEDDING - MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);

    // Initialize everything
    loadConfig();
    initCountdown();
    initMusic();
    initGallery();
    initGifts();
    initRSVP();
    initWatermark();
});

// ==========================================
// NAVIGATION MENU
// ==========================================

function initNavigation() {
    const nav = document.getElementById('nav-menu');
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Show nav after opening invitation
    window.showNavigation = function() {
        nav.classList.add('visible');
    };
    
    // Active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for nav items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = window.innerWidth <= 768 ? 80 : 80;
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// UPDATE OPEN INVITATION FUNCTION
// ==========================================

function openInvitation() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('main-content').classList.add('visible');
    }, 100);
    
    // Show navigation
    setTimeout(() => {
        if (window.showNavigation) {
            window.showNavigation();
        }
    }, 500);
    
    // Auto play music
    const music = document.getElementById('bg-music');
    if (WEDDING_CONFIG.music.autoplay) {
        music.play().catch(e => console.log('Autoplay prevented'));
        document.getElementById('music-toggle').classList.add('playing');
    }
}

// ==========================================
// UPDATE DOMContentLoaded
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);

    // Initialize everything
    loadConfig();
    initCountdown();
    initMusic();
    initGallery();
    initGifts();
    initRSVP();
    initWatermark();
    initNavigation(); // Tambah ini
});


// ==========================================
// LOAD CONFIGURATION
// ==========================================

function loadConfig() {
    const cfg = WEDDING_CONFIG;

    // Cover
    document.getElementById('cover-names').textContent = cfg.couple.nameShort;
    document.getElementById('cover-alias').textContent = cfg.couple.tagline;
    document.getElementById('cover-date').textContent = cfg.couple.date;
    document.getElementById('hero-names').textContent = cfg.couple.nameFull;
    document.getElementById('hero-quote').textContent = cfg.couple.onePieceQuote;
    document.getElementById('footer-names').textContent = cfg.couple.nameShort;

    // Groom
    document.getElementById('nama-pria').textContent = cfg.groom.name;
    document.getElementById('alias-pria').textContent = `"${cfg.groom.alias}"`;
    document.getElementById('photo-pria').src = cfg.groom.photo;
    document.getElementById('bounty-pria').textContent = cfg.groom.bounty;
    document.getElementById('df-pria').textContent = `🍎 ${cfg.groom.devilFruit}`;
    document.getElementById('ortu-pria').textContent = `Putra dari ${cfg.groom.parents}`;
    document.getElementById('dream-pria').textContent = cfg.groom.dream;

    // Bride
    document.getElementById('nama-wanita').textContent = cfg.bride.name;
    document.getElementById('alias-wanita').textContent = `"${cfg.bride.alias}"`;
    document.getElementById('photo-wanita').src = cfg.bride.photo;
    document.getElementById('bounty-wanita').textContent = cfg.bride.bounty;
    document.getElementById('df-wanita').textContent = `🍎 ${cfg.bride.devilFruit}`;
    document.getElementById('ortu-wanita').textContent = `Putri dari ${cfg.bride.parents}`;
    document.getElementById('dream-wanita').textContent = cfg.bride.dream;

    // Event - Akad
    document.getElementById('akad-date').textContent = cfg.event.akad.date;
    document.getElementById('akad-time').textContent = cfg.event.akad.time;
    document.getElementById('akad-venue').textContent = cfg.event.akad.venue;
    document.getElementById('akad-address').textContent = cfg.event.akad.address;
    document.getElementById('akad-maps').href = cfg.event.akad.maps;

    // Event - Resepsi
    document.getElementById('resepsi-date').textContent = cfg.event.resepsi.date;
    document.getElementById('resepsi-time').textContent = cfg.event.resepsi.time;
    document.getElementById('resepsi-venue').textContent = cfg.event.resepsi.venue;
    document.getElementById('resepsi-address').textContent = cfg.event.resepsi.address;
    document.getElementById('resepsi-maps').href = cfg.event.resepsi.maps;

    // Music
    document.getElementById('bg-music').src = cfg.music.url;
}

// ==========================================
// GALLERY
// ==========================================

function initGallery() {
    const container = document.getElementById('gallery-container');
    const images = WEDDING_CONFIG.gallery;

    container.innerHTML = images.map((src, index) => `
        <div class="gallery-item" style="animation-delay: ${index * 0.1}s">
            <img src="${src}" alt="Adventure Photo ${index + 1}" onclick="openLightbox('${src}')">
        </div>
    `).join('');
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==========================================
// GIFTS
// ==========================================

function initGifts() {
    const cfg = WEDDING_CONFIG.gifts;
    
    // QRIS
    document.getElementById('qris-image').src = cfg.qris.image;
    
    // Banks
    const bankList = document.getElementById('bank-list');
    bankList.innerHTML = cfg.banks.map(bank => `
        <div class="bank-item" onclick="copyToClipboard('${bank.number}')">
            <img src="${bank.logo}" alt="${bank.name}">
            <div class="bank-info">
                <p class="bank-name">Bank ${bank.name}</p>
                <p class="account-number">${bank.number} <i class="fas fa-copy"></i></p>
                <p class="account-name">a.n. ${bank.holder}</p>
            </div>
        </div>
    `).join('');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening disalin: ' + text);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Nomor rekening disalin: ' + text);
    });
}

// ==========================================
// RSVP / WA CONFIRMATION
// ==========================================

function initRSVP() {
    document.getElementById('rsvp-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('guest-name').value;
        const attendance = document.getElementById('attendance').value;
        const count = document.getElementById('guest-count').value || '1';
        const message = document.getElementById('guest-message').value;
        
        const waMessage = `${WEDDING_CONFIG.whatsapp.message}
        
🏴‍☠️ *Nama Kru:* ${name}
⚓ *Kehadiran:* ${attendance}
👥 *Jumlah Kru:* ${count}
💬 *Pesan:* ${message || '-'}`;

        const waUrl = `https://wa.me/${WEDDING_CONFIG.whatsapp.number}?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank');
    });
}

// ==========================================
// COUNTDOWN
// ==========================================

function initCountdown() {
    // Parse date from config (format: "22 Mei 2024")
    const dateStr = WEDDING_CONFIG.couple.date;
    const targetDate = new Date(dateStr.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3')).getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = `
                <div class="time-box" style="grid-column: span 4;">
                    <span>Selamat Menikah!</span>
                </div>
            `;
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    setInterval(update, 1000);
    update();
}

// ==========================================
// MUSIC
// ==========================================

function initMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    
    btn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            btn.classList.add('playing');
            btn.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            music.pause();
            btn.classList.remove('playing');
            btn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
}

// ==========================================
// WATERMARK
// ==========================================

function initWatermark() {
    const cfg = WEDDING_CONFIG.watermark;
    
    // Footer watermark
    if (cfg.showFooter) {
        document.getElementById('watermark-footer').style.display = 'block';
        document.querySelector('.watermark-designer strong').textContent = cfg.name;
        document.getElementById('watermark-phone').textContent = cfg.phone;
        document.getElementById('watermark-wa').href = `https://wa.me/${cfg.whatsapp}`;
    } else {
        document.getElementById('watermark-footer').style.display = 'none';
    }
    
    // Fixed watermark
    const fixed = document.getElementById('fixed-watermark');
    if (cfg.showFixed) {
        fixed.style.display = 'block';
        fixed.querySelector('a').href = `https://wa.me/${cfg.whatsapp}`;
    } else {
        fixed.style.display = 'none';
    }
}

// ==========================================
// OPEN INVITATION
// ==========================================

function openInvitation() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('main-content').classList.add('visible');
    }, 100);
    
    // Auto play music
    const music = document.getElementById('bg-music');
    if (WEDDING_CONFIG.music.autoplay) {
        music.play().catch(e => console.log('Autoplay prevented'));
        document.getElementById('music-toggle').classList.add('playing');
    }
}
