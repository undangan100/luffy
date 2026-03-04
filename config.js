// ==========================================
// KONFIGURASI UNDANGAN PERNIKAHAN ONE PIECE
// GANTI SEMUA DATA DI BAWAH INI
// ==========================================

const WEDDING_CONFIG = {
    // ==========================================
    // DATA MEMPELAI
    // ==========================================
    couple: {
        nameShort: "Luffy & Boa",
        nameFull: "Monkey D. Luffy & Boa Hancock",
        date: "22 Mei 2024",
        tagline: "Petualangan Cinta Sejati Dimulai!",
        onePieceQuote: "Aku akan menjadi Raja Bajak Laut... dan suamimu!"
    },

    // ==========================================
    // MEMPelai PRIA (Raja Bajak Laut)
    // ==========================================
    groom: {
        name: "Monkey D. Luffy",
        alias: "Mugiwara no Luffy",
        photo: "https://i.ibb.co/xxxxxx/luffy.jpg", // GANTI dengan link IBB
        parents: "Bapak Monkey D. Dragon & Ibu Curly Dadan",
        instagram: "https://instagram.com/luffy.mugiwara",
        bounty: "3.000.000.000",
        devilFruit: "Hito Hito no Mi, Model: Nika",
        dream: "Menjadi Raja Bajak Laut dan melindungi keluarganya"
    },

    // ==========================================
    // MEMPelai WANITA (Pirate Empress)
    // ==========================================
    bride: {
        name: "Boa Hancock",
        alias: "Pirate Empress",
        photo: "https://i.ibb.co/xxxxxx/hancock.jpg", // GANTI dengan link IBB
        parents: "Putri dari Keluarga Kuja",
        instagram: "https://instagram.com/boa.hancock",
        bounty: "1.659.000.000",
        devilFruit: "Mero Mero no Mi",
        dream: "Bersama dengan Luffy-sama selamanya"
    },

    // ==========================================
    // DETAIL ACARA
    // ==========================================
    event: {
        akad: {
            date: "Rabu, 22 Mei 2024",
            time: "08:00 - 10:00 WIB",
            venue: "Marineford Hall",
            address: "Jalan Grand Line No. 100, New World",
            maps: "https://maps.google.com/?q=Marineford+Hall"
        },
        resepsi: {
            date: "Rabu, 22 Mei 2024",
            time: "11:00 - 14:00 WIB",
            venue: "Thousand Sunny Banquet",
            address: "Jalan Going Merry No. 1000, New World",
            maps: "https://maps.google.com/?q=Thousand+Sunny"
        }
    },

    // ==========================================
    // GALERI FOTO (LINK IBB)
    // ==========================================
    gallery: [
        "https://i.ibb.co/xxxxxx/foto1.jpg",
        "https://i.ibb.co/xxxxxx/foto2.jpg",
        "https://i.ibb.co/xxxxxx/foto3.jpg",
        "https://i.ibb.co/xxxxxx/foto4.jpg",
        "https://i.ibb.co/xxxxxx/foto5.jpg",
        "https://i.ibb.co/xxxxxx/foto6.jpg",
        "https://i.ibb.co/xxxxxx/foto7.jpg",
        "https://i.ibb.co/xxxxxx/foto8.jpg"
    ],

    // ==========================================
    // HADIAH - QRIS & BANK
    // ==========================================
    gifts: {
        qris: {
            image: "https://i.ibb.co/xxxxxx/qris.jpg", // QRIS dari IBB
            title: "Scan QRIS"
        },
        banks: [
            {
                name: "BCA",
                logo: "https://i.ibb.co/xxxxxx/bca.png", // Logo bank dari IBB
                number: "1234567890",
                holder: "Monkey D Luffy"
            },
            {
                name: "Mandiri",
                logo: "https://i.ibb.co/xxxxxx/mandiri.png",
                number: "0987654321",
                holder: "Boa Hancock"
            },
            {
                name: "BRI",
                logo: "https://i.ibb.co/xxxxxx/bri.png",
                number: "1122334455",
                holder: "Straw Hat Crew"
            }
        ]
    },

    // ==========================================
    // KONFIRMASI WA (RSVP)
    // ==========================================
    whatsapp: {
        number: "6285882618717", // Format: 62xxxxxxxxxx
        message: "Halo Kapten! Saya ingin konfirmasi kehadiran di pernikahan Luffy & Hancock:"
    },

    // ==========================================
    // BACKGROUND MUSIC (ARCHIVE.ORG)
    // ==========================================
    music: {
        // Cari lagu di https://archive.org
        // Contoh: OST One Piece, lagu romantis, dll
        url: "https://archive.org/download/one-piece-ost/One%20Piece%20OST%20-%20Wedding%20Song.mp3",
        autoplay: true
    },

    // ==========================================
    // WATERMARK DESIGNER
    // ==========================================
    watermark: {
        name: "Malik",
        phone: "085882618717",
        whatsapp: "6285882618717",
        showFixed: true,
        showFooter: true
    },

    // ==========================================
    // TEMA ONE PIECE CUSTOMIZATION
    // ==========================================
    theme: {
        primaryColor: "#D4AF37", // Warna emas (Gold Roger)
        secondaryColor: "#C41E3A", // Merah (Luffy)
        accentColor: "#8B008B", // Ungu (Hancock)
        wantedPoster: true, // Efek poster buronan
        devilFruitEffect: true, // Efek buah iblis
        strawHatIcon: true // Ikon topi jerami
    }
};

