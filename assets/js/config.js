/* ========================================
   KONFIGURATIONSDATEI
   Hier werden alle wichtigen Einstellungen zentral verwaltet
   ======================================== */

// ===== KONTAKTINFORMATIONEN =====
// Hier können Sie alle Kontaktdaten zentral ändern
const CONFIG = {
    contact: {
        name: "Bäckerei & Café Petite Violette",
        phone: "06127 7002415",
        phoneFormatted: "+4961277002415", // Für tel: Links
        email: "info@petite-violette.com",
        website: "https://petiteviolette.eatbu.com",
        address: {
            street: "Obergasse 10",
            postal: "65207",
            city: "Wiesbaden-Naurod",
            country: "Deutschland",
            // Für Google Maps Links
            googleMapsQuery: "Obergasse+10,+65207+Wiesbaden-Naurod"
        }
    },

    // ===== SOCIAL MEDIA =====
    social: {
        instagram: {
            handle: "@petite.violette.baeckerei.cafe",
            url: "https://www.instagram.com/petite.violette.baeckerei.cafe"
        },
        facebook: {
            handle: "Petite Violette Café Bäckerei",
            url: "https://www.facebook.com/p/Petite-Violette-Café-Bäckerei-100089479161282/"
        }
    },

    // ===== ÖFFNUNGSZEITEN =====
    // Ändern Sie hier die Öffnungszeiten
    hours: {
        monday: { 
            open: "07:00", 
            close: "18:00",
            closed: false,
            note: "" 
        },
        tuesday: { 
            open: "07:00", 
            close: "18:00",
            closed: false,
            note: "" 
        },
        wednesday: { 
            open: "07:00", 
            close: "18:00",
            closed: false,
            note: "" 
        },
        thursday: { 
            open: "07:00", 
            close: "18:00",
            closed: false,
            note: "" 
        },
        friday: { 
            open: "07:00", 
            close: "18:00",
            closed: false,
            note: "" 
        },
        saturday: { 
            open: "07:00", 
            close: "16:00",
            closed: false,
            note: "" 
        },
        sunday: { 
            open: "08:00", 
            close: "15:00",
            closed: false,
            note: "" 
        },
        // Spezielle Nachrichten
        specialNote: "Bitte kontaktieren Sie uns für aktuelle Öffnungszeiten",
        useSpecialNote: true // Setzt auf false, um normale Zeiten zu zeigen
    },

    // ===== WEBSITE EINSTELLUNGEN =====
    site: {
        title: "Bäckerei & Café Petite Violette",
        description: "Bäckerei & Café Petite Violette in Wiesbaden-Naurod. Frische Backwaren, regionale Produkte und gemütliches Café-Ambiente.",
        keywords: "Bäckerei, Café, Wiesbaden, Naurod, Backwaren, Kaffee, regional, frisch",
        language: "de",
        author: "Petite Violette Team"
    },

    // ===== BUSINESS INFORMATIONEN =====
    business: {
        founded: "2023", // Gründungsjahr
        slogan: "Handwerk mit Liebe • Frische aus der Region",
        specialties: [
            "Frische Backwaren vom Köstner",
            "Torten von Konditorei Blum", 
            "Regionale Produkte",
            "Gemütliches Café-Ambiente"
        ]
    },

    // ===== PARTNER INFORMATIONEN =====
    partners: {
        bakery: {
            name: "Der Köstner",
            description: "Traditionelle Bäckerei mit rustikalen, knusprigen Backwaren",
            specialties: ["Krosses Brot", "Wilde Kruste", "Garantierte Saftigkeit"]
        },
        pastry: {
            name: "Konditorei Blum",
            founded: "1878",
            description: "Wiesbadener Institution für höchste Qualität",
            specialties: ["Nusstörtchen", "Schwarzwälder Kirschtörtchen", "Motivtorten"]
        },
        market: {
            name: "Wiesbadener Markt",
            description: "Frische Molkereiprodukte von lokalen Erzeugern",
            products: ["Butter", "Milch", "Regionale Spezialitäten"]
        },
        domain: {
            name: "Domäne Mechtildshausen",
            description: "Nachhaltige Landwirtschaft für Frische und Qualität",
            focus: "Nachhaltige regionale Produkte"
        }
    },

    // ===== RESERVIERUNG SYSTEM =====
    reservation: {
        enabled: true,
        url: "https://petiteviolette.eatbu.com",
        buttonText: "Online reservieren",
        phoneReservation: true,
        onlineReservation: true
    },

    // ===== FEATURES =====
    features: {
        multiLanguage: false, // Für zukünftige Mehrsprachigkeit
        darkMode: false,      // Für zukünftigen Dark Mode
        analytics: false,     // Für Google Analytics
        cookieConsent: false, // Für Cookie Banner
        newsletter: false,    // Für Newsletter Anmeldung
        onlineOrdering: false // Für Online Bestellungen
    },

    // ===== API ENDPOINTS =====
    // Für zukünftige Erweiterungen
    api: {
        baseUrl: "",
        endpoints: {
            contact: "/api/contact",
            reservations: "/api/reservations",
            products: "/api/products"
        }
    },

    // ===== BILD KONFIGURATION =====
    images: {
        basePath: "assets/images/",
        placeholders: {
            product: "https://via.placeholder.com/300x200?text=Produkt",
            cafe: "https://via.placeholder.com/400x250?text=Café",
            partner: "https://via.placeholder.com/200x100?text=Partner"
        },
        formats: ["webp", "jpg", "png"], // Bevorzugte Formate
        sizes: {
            thumbnail: "150x100",
            medium: "400x300", 
            large: "800x600",
            hero: "1200x600"
        }
    },

    // ===== DEVELOPMENT EINSTELLUNGEN =====
    dev: {
        debug: false,           // Debug Modus
        showPlaceholders: true, // Platzhalter für Bilder anzeigen
        logLevel: "warn"        // Log Level: error, warn, info, debug
    }
};

// ===== HILFSFUNKTIONEN =====

// Formatierte Telefonnummer für Anzeige
CONFIG.getFormattedPhone = function() {
    return this.contact.phone.replace(/(\d{5})(\s)(\d{6})/, '$1 $3');
};

// Vollständige Adresse als String
CONFIG.getFullAddress = function() {
    const addr = this.contact.address;
    return `${addr.street}, ${addr.postal} ${addr.city}, ${addr.country}`;
};

// Google Maps Link generieren
CONFIG.getGoogleMapsLink = function() {
    return `https://www.google.com/maps/search/?api=1&query=${this.contact.address.googleMapsQuery}`;
};

// Business Schema für SEO (JSON-LD)
CONFIG.getBusinessSchema = function() {
    return {
        "@context": "https://schema.org",
        "@type": "Bakery",
        "name": this.contact.name,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": this.contact.address.street,
            "addressLocality": this.contact.address.city,
            "postalCode": this.contact.address.postal,
            "addressCountry": this.contact.address.country
        },
        "telephone": this.contact.phoneFormatted,
        "email": this.contact.email,
        "url": this.contact.website,
        "description": this.site.description
    };
};

// ===== EXPORT =====
// Mache CONFIG global verfügbar
window.CONFIG = CONFIG;

// Debug Informationen (nur im Development)
if (CONFIG.dev.debug) {
    console.log("🔧 CONFIG geladen:", CONFIG);
}