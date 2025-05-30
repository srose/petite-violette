/* ========================================
   CONTENT MANAGEMENT
   Alle Texte und Inhalte der Website zentral verwaltet
   ======================================== */

const CONTENT = {
    // ===== HEADER & NAVIGATION =====
    header: {
        logo: "🌸 Petite Violette 🌸",
        tagline: "Bäckerei & Café • Handwerk mit Liebe • Frische aus der Region"
    },

    navigation: [
        { id: "about", text: "Über uns", href: "#about" },
        { id: "products", text: "Produkte", href: "#products" },
        { id: "coffee", text: "Kaffee", href: "#coffee" },
        { id: "regional", text: "Regional", href: "#regional" },
        { id: "cafe", text: "Café", href: "#cafe" },
        { id: "contact", text: "Kontakt", href: "#contact" }
    ],

    // ===== ÜBER UNS SEKTION =====
    about: {
        title: "Willkommen bei Petite Violette",
        content: [
            "Herzlich willkommen in unserem charmanten Bäckerei & Café Petite Violette! Wir verbinden traditionelles Handwerk mit regionalen Produkten und erstklassigem Kaffee zu einem besonderen Genusserlebnis.",
            "Bei uns finden Sie nicht nur frische Backwaren vom regionalen Bäcker \"Der Köstner\", sondern auch feinste Produkte vom Wiesbadener Markt und der Domäne Mechtildshausen. Genießen Sie Ihren Kaffee in unserem gemütlichen Café mit Sitzplätzen drinnen und draußen."
        ]
    },

    // ===== PRODUKTE =====
    products: {
        title: "Unsere Produkte",
        items: [
            {
                id: "backwaren",
                icon: "🥖",
                title: "Frische Backwaren",
                description: "Köstliches Brot und knusprige Brötchen von der Bäckerei \"Der Köstner\" - bekannt für rustikale, wilde und knusprige Produkte mit garantierter Saftigkeit und langer Frischhaltung.",
                highlights: "Krosses Brot mit wilder Kruste, kreative Neukreationen, traditionelle Brötchen",
                supplier: "Der Köstner"
            },
            {
                id: "torten",
                icon: "🍰",
                title: "Exquisite Torten",
                description: "Handgefertigte Torten und Konditorwaren von der renommierten Konditorei Blum - seit 1878 eine Wiesbadener Institution für höchste Qualität und solides Handwerk.",
                highlights: "Nusstörtchen, Schwarzwälder Kirschtörtchen, schwedischer Apfelkuchen, individuelle Motivtorten",
                supplier: "Konditorei Blum"
            },
            {
                id: "molkerei",
                icon: "🧈",
                title: "Frische Molkereiprodukte",
                description: "Frische Butter und Milch direkt vom Wiesbadener Markt und der Domäne Mechtildshausen - regional, frisch und von höchster Qualität.",
                highlights: "Lokale Produzenten, kurze Wege, beste Frische",
                supplier: "Wiesbadener Markt & Domäne Mechtildshausen"
            },
            {
                id: "honig",
                icon: "🍯",
                title: "Regionaler Honig",
                description: "Goldener Honig von ausgewählten Imkern aus der Region - ein süßer Gruß aus den Wäldern und Wiesen rund um Wiesbaden.",
                highlights: "Verschiedene regionale Honigsorten je nach Saison",
                supplier: "Regionale Imker"
            }
        ]
    },

    // ===== KAFFEE =====
    coffee: {
        title: "Kaffee & Getränke",
        intro: "Genießen Sie erstklassigen Kaffee von der Bäckerei \"Der Köstner\", die für ihre Qualität und handwerkliche Perfektion bekannt ist.",
        varieties: [
            {
                icon: "☕",
                name: "Espresso",
                description: "Kräftig und aromatisch"
            },
            {
                icon: "🥛",
                name: "Cappuccino", 
                description: "Mit cremigem Milchschaum"
            },
            {
                icon: "☕",
                name: "Filterkaffee",
                description: "Mild und bekömmlich"
            },
            {
                icon: "🍵",
                name: "Café Latte",
                description: "Sanft und vollmundig"
            }
        ],
        quality: {
            title: "Qualität die überzeugt",
            text: "Unser Kaffee zeichnet sich durch einzigartig guten Geschmack, perfekte Röstung und höchste Qualität aus. Jede Tasse wird mit Sorgfalt und Hingabe zubereitet."
        }
    },

    // ===== REGIONALE PARTNER =====
    partners: {
        title: "Regionale Partner",
        subtitle: "Unsere Lieferanten",
        items: [
            {
                id: "koestner",
                title: "Der Köstner Bäckerei",
                description: "Traditionelle Bäckerei mit zwei Standorten in Wiesbaden und Mainz-Kostheim. Bekannt für rustikale, knusprige Backwaren mit wilder Kruste und garantierter Saftigkeit.",
                specialties: ["Rustikale Backwaren", "Wilde Kruste", "Garantierte Saftigkeit"]
            },
            {
                id: "blum",
                title: "Konditorei Blum",
                description: "Seit 1878 eine Wiesbadener Institution. Herstellung ohne Backmischungen, Zusatzstoffe oder künstliche Aromen - nur beste Rohstoffe aus der Region.",
                specialties: ["Seit 1878", "Ohne Zusatzstoffe", "Regionale Rohstoffe"]
            },
            {
                id: "markt",
                title: "Wiesbadener Markt",
                description: "Frische Molkereiprodukte wie Butter und Milch direkt von lokalen Erzeugern - für beste Qualität und kurze Transportwege.",
                specialties: ["Lokale Erzeuger", "Kurze Wege", "Beste Qualität"]
            },
            {
                id: "domaene",
                title: "Domäne Mechtildshausen",
                description: "Hochwertige regionale Produkte aus nachhaltiger Landwirtschaft, die für Frische und Qualität stehen.",
                specialties: ["Nachhaltige Landwirtschaft", "Regional", "Höchste Qualität"]
            }
        ]
    },

    // ===== CAFÉ =====
    cafe: {
        title: "Unser Café",
        atmosphere: {
            title: "🪑 Gemütliche Atmosphäre",
            text: "Entspannen Sie in unserem liebevoll eingerichteten Café mit komfortablen Sitzplätzen im Innenbereich. An warmen Tagen laden wir Sie herzlich ein, unseren schönen Außenbereich zu genießen."
        },
        features: [
            {
                icon: "☕",
                title: "Café-Bereich innen",
                description: "Gemütliche Sitzplätze in warmer, einladender Atmosphäre - perfekt für eine entspannte Kaffeepause oder ein Treffen mit Freunden."
            },
            {
                icon: "🌞",
                title: "Terrasse & Außenbereich", 
                description: "Genießen Sie Ihr Getränk und unsere frischen Backwaren in unserem schönen Außenbereich - ideal für sonnige Tage."
            },
            {
                icon: "🍰",
                title: "Frische Vitrine",
                description: "Täglich frische Auswahl an Kuchen, Torten und süßen Leckereien - alle handgefertigt von unseren regionalen Partnern."
            },
            {
                icon: "🥖",
                title: "Täglich frisch",
                description: "Frische Brötchen, Brot und Gebäck vom Bäcker \"Der Köstner\" - jeden Tag aufs Neue gebacken für beste Qualität."
            }
        ]
    },

    // ===== KONTAKT =====
    contact: {
        title: "Kontakt & Öffnungszeiten",
        visit: {
            title: "🌸 Besuchen Sie uns in Wiesbaden-Naurod!",
            text: "Lassen Sie sich von unserer Auswahl an frischen Backwaren, köstlichen Torten und erstklassigem Kaffee begeistern. Wir freuen uns auf Ihren Besuch!"
        },
        buttons: [
            {
                text: "📞 Anrufen",
                href: "tel:{phone}",
                class: "btn"
            },
            {
                text: "🌐 Online reservieren", 
                href: "{reservation_url}",
                class: "btn btn-secondary"
            }
        ]
    },

    // ===== FOOTER =====
    footer: {
        sections: [
            {
                title: "Petite Violette",
                content: [
                    "Bäckerei & Café mit Herz",
                    "Regional • Frisch • Handgemacht"
                ]
            },
            {
                title: "Unsere Partner",
                content: [
                    "Der Köstner Bäckerei",
                    "Konditorei Blum", 
                    "Regionale Erzeuger"
                ]
            },
            {
                title: "Folgen Sie uns",
                content: [
                    "📸 Instagram: @petite.violette.baeckerei.cafe",
                    "🌐 Web: petite-violette.com"
                ]
            }
        ],
        copyright: "© 2025 Petite Violette - Bäckerei & Café. Alle Rechte vorbehalten."
    },

    // ===== BILDTEXTE & ALT-ATTRIBUTE =====
    images: {
        alt: {
            logo: "Petite Violette Logo",
            products_gallery: "Frische Backwaren und Produkte",
            cafe_interior: "Gemütlicher Innenbereich des Cafés",
            cafe_exterior: "Sonnige Außenterrasse",
            bakery_display: "Vitrine mit frischen Backwaren",
            coffee_preparation: "Zubereitung von frischem Kaffee"
        },
        captions: {
            products: "Unsere täglich frischen Produkte",
            cafe: "Entspannte Atmosphäre für jeden Anlass",
            partners: "Qualität durch regionale Partnerschaften"
        }
    },

    // ===== MEHRSPRACHIGKEIT (Vorbereitung) =====
    languages: {
        de: "Deutsch",
        en: "English"
        // Weitere Sprachen können hier hinzugefügt werden
    },

    // ===== SEO & META =====
    meta: {
        descriptions: {
            about: "Lernen Sie Petite Violette kennen - Ihr Bäckerei & Café in Wiesbaden-Naurod mit regionalen Produkten und handwerklicher Qualität.",
            products: "Entdecken Sie unsere frischen Backwaren vom Köstner, Torten von Konditorei Blum und regionale Spezialitäten.",
            coffee: "Genießen Sie erstklassigen Kaffee und Getränke in gemütlicher Atmosphäre bei Petite Violette.",
            contact: "Besuchen Sie uns in der Obergasse 10 in Wiesbaden-Naurod oder reservieren Sie online einen Tisch."
        },
        keywords: {
            products: "Backwaren, Torten, Konditorei Blum, Der Köstner, regional, frisch",
            coffee: "Kaffee, Espresso, Cappuccino, Café, Wiesbaden",
            contact: "Kontakt, Öffnungszeiten, Reservierung, Wiesbaden-Naurod"
        }
    }
};

// ===== HILFSFUNKTIONEN FÜR CONTENT =====

// Text mit Platzhaltern ersetzen
CONTENT.replaceVariables = function(text, variables = {}) {
    // Standard-Variablen aus CONFIG hinzufügen
    const allVariables = {
        phone: CONFIG.contact.phoneFormatted,
        email: CONFIG.contact.email,
        reservation_url: CONFIG.reservation.url,
        address: CONFIG.getFullAddress(),
        ...variables
    };

    return text.replace(/{(\w+)}/g, (match, key) => {
        return allVariables[key] || match;
    });
};

// Content für bestimmte Sprache abrufen (Vorbereitung für Mehrsprachigkeit)
CONTENT.getLocalizedContent = function(key, language = 'de') {
    // Aktuell nur Deutsch, aber vorbereitet für Erweiterung
    return this[key] || null;
};

// Content für SEO-optimierte Beschreibungen
CONTENT.getMetaDescription = function(section) {
    return this.meta.descriptions[section] || CONFIG.site.description;
};

// ===== EXPORT =====
window.CONTENT = CONTENT;

// Debug Information
if (CONFIG.dev.debug) {
    console.log("📝 CONTENT geladen:", CONTENT);
}