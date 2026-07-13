'use strict';

// ════════════════════════════════════════════════════════════════
//  FLAG BUILDER UTILITIES
//  All flags are inline SVG at viewBox 0 0 180 115
// ════════════════════════════════════════════════════════════════
const W = 180, H = 115;

function svg(body) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">${body}</svg>`;
}

// Canton badge used on all 15 original Soviet flags:
// gold ☭ + gold ★ on a red strip at top-left
const SC = `<rect width="62" height="37" fill="#CC0000"/>
<text x="6" y="29" font-size="27" fill="#FFD700" font-family="Georgia,serif">☭</text>
<text x="39" y="17" font-size="15" fill="#FFD700" font-family="sans-serif">★</text>`;

// Small red square badge with ☭ used on the 15 new-republic flags
const NC = `<rect width="40" height="30" rx="2" fill="rgba(170,0,0,0.88)"/>
<text x="4" y="23" font-size="22" fill="#FFD700" font-family="Georgia,serif">☭</text>`;

// ════════════════════════════════════════════════════════════════
//  REPUBLIC DATA  – 30 republics
// ════════════════════════════════════════════════════════════════
const republics = [

    // ── ORIGINAL 15 SOVIET REPUBLICS ─────────────────────────

    {   // 1
        name: "Russian SFSR",
        native: "Российская Советская Федеративная Социалистическая Республика",
        capital: "Moscow", city: "Moscow",
        population: "148,300,000", area: "17,075,400 km²", language: "Russian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect x="0" y="0" width="24" height="${H}" fill="#0033A0"/>
            <rect x="22" y="0" width="2" height="${H}" fill="#ffffff"/>
            ${SC}`)
    },
    {   // 2
        name: "Ukrainian SSR",
        native: "Українська Радянська Соціалістична Республіка",
        capital: "Kyiv", city: "Kyiv",
        population: "52,000,000", area: "603,550 km²", language: "Ukrainian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#CC1C1C"/>
            <rect y="76" width="${W}" height="39" fill="#005BBB"/>
            ${SC}`)
    },
    {   // 3 – Byelorussian flag: red field, green stripe, white ornamental stripe on hoist
        name: "Byelorussian SSR",
        native: "Беларуская Савецкая Сацыялістычная Рэспубліка",
        capital: "Minsk", city: "Minsk",
        population: "10,300,000", area: "207,600 km²", language: "Belarusian, Russian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#CF101A"/>
            <rect y="86" width="${W}" height="29" fill="#009F3D"/>
            <rect x="0" y="0" width="21" height="${H}" fill="#ffffff"/>
            <rect x="3" y="4"  width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="18" width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="32" width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="46" width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="60" width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="74" width="15" height="8" fill="#CF101A"/>
            <rect x="3" y="88" width="15" height="8" fill="#009F3D"/>
            <rect x="3" y="102" width="15" height="8" fill="#009F3D"/>
            ${SC}`)
    },
    {   // 4 – Uzbek: red, thin white, light-blue band, thin white, red
        name: "Uzbek SSR",
        native: "Ўзбекистон Совет Социалистик Республикаси",
        capital: "Tashkent", city: "Tashkent",
        population: "22,000,000", area: "448,978 km²", language: "Uzbek",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect y="36" width="${W}" height="3" fill="#ffffff"/>
            <rect y="39" width="${W}" height="22" fill="#1EB4E6"/>
            <rect y="61" width="${W}" height="3" fill="#ffffff"/>
            ${SC}`)
    },
    {   // 5 – Kazakh: sky-blue, thin red stripe at top; ☭★ in blue area (dark red)
        name: "Kazakh SSR",
        native: "Қазақ Кеңестік Социалистік Республикасы",
        capital: "Almaty", city: "Almaty",
        population: "16,500,000", area: "2,724,900 km²", language: "Kazakh, Russian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#00ADEF"/>
            <rect y="0" width="${W}" height="14" fill="#D52B1E"/>
            <text x="5" y="48" font-size="26" fill="#D52B1E" font-family="Georgia,serif">☭</text>
            <text x="35" y="34" font-size="14" fill="#D52B1E">★</text>`)
    },
    {   // 6 – Georgian: red with dark-blue & white stripes at bottom
        name: "Georgian SSR",
        native: "საქართველოს საბჭოთა სოციალისტური რესპუბლიკა",
        capital: "Tbilisi", city: "Tbilisi",
        population: "5,400,000", area: "69,700 km²", language: "Georgian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect y="87" width="${W}" height="14" fill="#1A2060"/>
            <rect y="101" width="${W}" height="14" fill="#E0E0E0"/>
            ${SC}`)
    },
    {   // 7 – Azerbaijan: blue / red / green thirds
        name: "Azerbaijan SSR",
        native: "Azərbaycan Sovet Sosialist Respublikası",
        capital: "Baku", city: "Baku",
        population: "7,200,000", area: "86,600 km²", language: "Azerbaijani",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#0092BC"/>
            <rect y="38" width="${W}" height="39" fill="#D52B1E"/>
            <rect y="77" width="${W}" height="38" fill="#009B77"/>
            ${SC}`)
    },
    {   // 8 – Lithuanian: red, thin white, thin green at bottom
        name: "Lithuanian SSR",
        native: "Lietuvos Tarybų Socialistinė Respublika",
        capital: "Vilnius", city: "Vilnius",
        population: "3,700,000", area: "65,300 km²", language: "Lithuanian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#C1272D"/>
            <rect y="95" width="${W}" height="3"  fill="#ffffff"/>
            <rect y="98" width="${W}" height="17" fill="#006A29"/>
            ${SC}`)
    },
    {   // 9 – Moldavian: red, thin green stripe at bottom
        name: "Moldavian SSR",
        native: "Република Советикэ Сочиалистэ Молдовеняскэ",
        capital: "Chișinău", city: "Chișinău",
        population: "4,400,000", area: "33,846 km²", language: "Moldavian, Russian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect y="96" width="${W}" height="19" fill="#009A44"/>
            ${SC}`)
    },
    {   // 10 – Latvian: carmine / white / carmine  (2:1:2)
        name: "Latvian SSR",
        native: "Latvijas Padomju Sociālistiskā Republika",
        capital: "Riga", city: "Riga",
        population: "2,700,000", area: "64,589 km²", language: "Latvian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#9E3039"/>
            <rect y="46" width="${W}" height="23" fill="#ffffff"/>
            ${SC}`)
    },
    {   // 11 – Kirghiz: red with blue-white-blue horizontal band
        name: "Kirghiz SSR",
        native: "Кыргыз Советтик Социалисттик Республикасы",
        capital: "Bishkek", city: "Bishkek",
        population: "4,600,000", area: "199,951 km²", language: "Kyrgyz, Russian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect y="45" width="${W}" height="5"  fill="#003DA5"/>
            <rect y="50" width="${W}" height="15" fill="#ffffff"/>
            <rect y="65" width="${W}" height="5"  fill="#003DA5"/>
            ${SC}`)
    },
    {   // 12 – Tajik: red / white / green
        name: "Tajik SSR",
        native: "Ҷумҳурии Шӯравии Сотсиалистии Тоҷикистон",
        capital: "Dushanbe", city: "Dushanbe",
        population: "5,800,000", area: "143,100 km²", language: "Tajik",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#007A3D"/>
            <rect y="0"  width="${W}" height="64" fill="#D52B1E"/>
            <rect y="62" width="${W}" height="8"  fill="#ffffff"/>
            ${SC}`)
    },
    {   // 13 – Armenian: red / blue / orange
        name: "Armenian SSR",
        native: "Հայկական Խորհրդային Սոցիալիստական Հանրապետություն",
        capital: "Yerevan", city: "Yerevan",
        population: "3,300,000", area: "29,743 km²", language: "Armenian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D90012"/>
            <rect y="38" width="${W}" height="39" fill="#0033A0"/>
            <rect y="77" width="${W}" height="38" fill="#F2A800"/>
            ${SC}`)
    },
    {   // 14 – Turkmen: red with thin green stripe on left side
        name: "Turkmen SSR",
        native: "Türkmenistan Sowet Sosialistik Respublikasy",
        capital: "Ashgabat", city: "Ashgabat",
        population: "3,800,000", area: "488,100 km²", language: "Turkmen",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect x="0" y="0" width="20" height="${H}" fill="#1BA134"/>
            <rect x="18" y="0" width="2"  height="${H}" fill="#ffffff"/>
            ${SC}`)
    },
    {   // 15 – Estonian: red with thin blue + white stripes
        name: "Estonian SSR",
        native: "Eesti Nõukogude Sotsialistlik Vabariik",
        capital: "Tallinn", city: "Tallinn",
        population: "1,600,000", area: "45,228 km²", language: "Estonian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D52B1E"/>
            <rect y="45" width="${W}" height="14" fill="#0072CE"/>
            <rect y="59" width="${W}" height="14" fill="#ffffff"/>
            ${SC}`)
    },

    // ── NEW 15 REPUBLICS (real flags + ☭ badge) ──────────────

    {   // 16 – Czech: white top / red bottom / blue triangle hoist
        name: "Czech SSR",
        native: "Česká Sovětská Socialistická Republika",
        capital: "Prague", city: "Prague",
        population: "10,600,000", area: "78,866 km²", language: "Czech",
        flag: svg(`
            <rect width="${W}" height="57" fill="#ffffff"/>
            <rect y="57" width="${W}" height="58" fill="#D7141A"/>
            <polygon points="0,0 80,58 0,115" fill="#11457E"/>
            ${NC}`)
    },
    {   // 17 – Polish: white top / red bottom
        name: "Polish SSR",
        native: "Polska Sowiecka Republika Socjalistyczna",
        capital: "Warsaw", city: "Warsaw",
        population: "38,000,000", area: "312,696 km²", language: "Polish",
        flag: svg(`
            <rect width="${W}" height="57" fill="#ffffff"/>
            <rect y="57" width="${W}" height="58" fill="#DC143C"/>
            ${NC}`)
    },
    {   // 18 – Slovak: white / blue / red
        name: "Slovak SSR",
        native: "Slovenská Sovietska Socialistická Republika",
        capital: "Bratislava", city: "Bratislava",
        population: "5,500,000", area: "49,035 km²", language: "Slovak",
        flag: svg(`
            <rect width="${W}" height="38" fill="#ffffff"/>
            <rect y="38" width="${W}" height="39" fill="#0B4EA2"/>
            <rect y="77" width="${W}" height="38" fill="#EE1C25"/>
            ${NC}`)
    },
    {   // 19 – Hungarian: red / white / green
        name: "Hungarian SSR",
        native: "Magyar Szovjet Szocialista Köztársaság",
        capital: "Budapest", city: "Budapest",
        population: "9,800,000", area: "93,028 km²", language: "Hungarian",
        flag: svg(`
            <rect width="${W}" height="38" fill="#CC2222"/>
            <rect y="38" width="${W}" height="39" fill="#ffffff"/>
            <rect y="77" width="${W}" height="38" fill="#3D7B3F"/>
            ${NC}`)
    },
    {   // 20 – Romanian: blue / yellow / red vertical thirds
        name: "Romanian SSR",
        native: "Republica Sovietică Socialistă Română",
        capital: "Bucharest", city: "Bucharest",
        population: "19,400,000", area: "238,397 km²", language: "Romanian",
        flag: svg(`
            <rect x="0"   width="60" height="${H}" fill="#002B7F"/>
            <rect x="60"  width="60" height="${H}" fill="#FCD116"/>
            <rect x="120" width="60" height="${H}" fill="#CE1126"/>
            ${NC}`)
    },
    {   // 21 – Bulgarian: white / green / red
        name: "Bulgarian SSR",
        native: "Българска Съветска Социалистическа Република",
        capital: "Sofia", city: "Sofia",
        population: "7,900,000", area: "110,993 km²", language: "Bulgarian",
        flag: svg(`
            <rect width="${W}" height="38" fill="#ffffff"/>
            <rect y="38" width="${W}" height="39" fill="#00966E"/>
            <rect y="77" width="${W}" height="38" fill="#D01C1F"/>
            ${NC}`)
    },
    {   // 22 – Macedonian: red + Vergina sun (yellow circle + 8 rays)
        name: "Macedonian SSR",
        native: "Македонска Советска Социјалистичка Република",
        capital: "Skopje", city: "Skopje",
        population: "2,100,000", area: "25,713 km²", language: "Macedonian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#CE2028"/>
            <circle cx="90" cy="57" r="15" fill="#F7D616"/>
            <line x1="90" y1="5"   x2="90" y2="36"  stroke="#F7D616" stroke-width="5"/>
            <line x1="90" y1="78"  x2="90" y2="110" stroke="#F7D616" stroke-width="5"/>
            <line x1="28" y1="57"  x2="59" y2="57"  stroke="#F7D616" stroke-width="5"/>
            <line x1="121" y1="57" x2="152" y2="57" stroke="#F7D616" stroke-width="5"/>
            <line x1="46" y1="16"  x2="68" y2="38"  stroke="#F7D616" stroke-width="4"/>
            <line x1="112" y1="76" x2="134" y2="98" stroke="#F7D616" stroke-width="4"/>
            <line x1="134" y1="16" x2="112" y2="38" stroke="#F7D616" stroke-width="4"/>
            <line x1="46" y1="98"  x2="68" y2="76"  stroke="#F7D616" stroke-width="4"/>
            ${NC}`)
    },
    {   // 23 – Kosovo: blue + gold Kosovo outline + 6 stars
        name: "Kosovan SSR",
        native: "Republika Socialiste Sovjetike e Kosovës",
        capital: "Pristina", city: "Pristina",
        population: "1,900,000", area: "10,887 km²", language: "Albanian, Serbian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#244AA5"/>
            <polygon points="68,30 70,82 108,82 112,68 104,54 110,40 108,30" fill="#E4B24A"/>
            <text x="42" y="22" font-size="11" fill="#E4B24A" letter-spacing="5">★★★★★★</text>
            ${NC}`)
    },
    {   // 24 – Serbian: red / blue / white
        name: "Serbian SSR",
        native: "Српска Совјетска Социјалистичка Република",
        capital: "Belgrade", city: "Belgrade",
        population: "6,900,000", area: "77,474 km²", language: "Serbian",
        flag: svg(`
            <rect width="${W}" height="38" fill="#C6363C"/>
            <rect y="38" width="${W}" height="39" fill="#0C4076"/>
            <rect y="77" width="${W}" height="38" fill="#ffffff"/>
            ${NC}`)
    },
    {   // 25 – Montenegrin: gold border, red field, simple crown/emblem in center
        name: "Montenegrin SSR",
        native: "Crnogorska Sovjet Socijalistička Republika",
        capital: "Podgorica", city: "Podgorica",
        population: "630,000", area: "13,812 km²", language: "Montenegrin",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#D4AF37"/>
            <rect x="7" y="7" width="166" height="101" fill="#D62B2F"/>
            <circle cx="90" cy="57" r="22" fill="#D4AF37" opacity="0.35"/>
            <text x="90" y="70" font-size="34" fill="#D4AF37" font-family="Georgia,serif" text-anchor="middle" font-weight="bold">☩</text>
            ${NC}`)
    },
    {   // 26 – Albanian: red + simplified double-headed eagle silhouette
        name: "Albanian SSR",
        native: "Republika Socialiste Sovjetike e Shqipërisë",
        capital: "Tirana", city: "Tirana",
        population: "2,900,000", area: "28,748 km²", language: "Albanian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#E41E20"/>
            <g fill="#111111">
                <ellipse cx="90" cy="68" rx="16" ry="22"/>
                <ellipse cx="68" cy="48" rx="20" ry="11" transform="rotate(-35,68,48)"/>
                <ellipse cx="112" cy="48" rx="20" ry="11" transform="rotate(35,112,48)"/>
                <circle cx="77" cy="34" r="8"/>
                <circle cx="103" cy="34" r="8"/>
                <rect x="72" y="27" width="10" height="5" rx="2" fill="#111"/>
                <rect x="98" y="27" width="10" height="5" rx="2" fill="#111"/>
            </g>
            ${NC}`)
    },
    {   // 27 – Bosnian: blue + yellow triangle + diagonal stars
        name: "Bosnian SSR",
        native: "Bosanska Sovjet Socijalistička Republika",
        capital: "Sarajevo", city: "Sarajevo",
        population: "3,500,000", area: "51,209 km²", language: "Bosnian, Serbian, Croatian",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#002395"/>
            <polygon points="${W},0 ${W},${H} 0,${H}" fill="#FCDD09"/>
            <text x="140" y="23"  font-size="10" fill="#ffffff">★</text>
            <text x="150" y="36"  font-size="10" fill="#ffffff">★</text>
            <text x="158" y="50"  font-size="10" fill="#ffffff">★</text>
            <text x="164" y="66"  font-size="10" fill="#ffffff">★</text>
            <text x="168" y="83"  font-size="10" fill="#ffffff">★</text>
            <text x="170" y="100" font-size="10" fill="#ffffff">★</text>
            ${NC}`)
    },
    {   // 28 – Croatian: red / white / blue + simplified checkerboard shield
        name: "Croatian SSR",
        native: "Hrvatska Socijalistička Sovjet Republika",
        capital: "Zagreb", city: "Zagreb",
        population: "4,100,000", area: "56,594 km²", language: "Croatian",
        flag: svg(`
            <rect width="${W}" height="38" fill="#CC2222"/>
            <rect y="38" width="${W}" height="39" fill="#ffffff"/>
            <rect y="77" width="${W}" height="38" fill="#1A3C8E"/>
            <rect x="73" y="28" width="34" height="56" rx="2" fill="#ffffff" stroke="#aaa" stroke-width="0.5"/>
            <rect x="73" y="28" width="11" height="9"  fill="#CC2222"/>
            <rect x="84" y="28" width="11" height="9"  fill="#ffffff"/>
            <rect x="95" y="28" width="12" height="9"  fill="#CC2222"/>
            <rect x="73" y="37" width="11" height="9"  fill="#ffffff"/>
            <rect x="84" y="37" width="11" height="9"  fill="#CC2222"/>
            <rect x="95" y="37" width="12" height="9"  fill="#ffffff"/>
            <rect x="73" y="46" width="11" height="9"  fill="#CC2222"/>
            <rect x="84" y="46" width="11" height="9"  fill="#ffffff"/>
            <rect x="95" y="46" width="12" height="9"  fill="#CC2222"/>
            <rect x="73" y="55" width="11" height="9"  fill="#ffffff"/>
            <rect x="84" y="55" width="11" height="9"  fill="#CC2222"/>
            <rect x="95" y="55" width="12" height="9"  fill="#ffffff"/>
            <rect x="73" y="64" width="11" height="9"  fill="#CC2222"/>
            <rect x="84" y="64" width="11" height="9"  fill="#ffffff"/>
            <rect x="95" y="64" width="12" height="9"  fill="#CC2222"/>
            ${NC}`)
    },
    {   // 29 – Slovenian: white / blue / red
        name: "Slovenian SSR",
        native: "Slovenska Sovjet Socialistična Republika",
        capital: "Ljubljana", city: "Ljubljana",
        population: "2,100,000", area: "20,271 km²", language: "Slovenian",
        flag: svg(`
            <rect width="${W}" height="38" fill="#ffffff"/>
            <rect y="38" width="${W}" height="39" fill="#003DA5"/>
            <rect y="77" width="${W}" height="38" fill="#CC0001"/>
            ${NC}`)
    },
    {   // 30 – Finnish: white + blue Nordic cross
        name: "Finnish SSR",
        native: "Suomen Sosialistinen Neuvostotasavalta",
        capital: "Helsinki", city: "Helsinki",
        population: "5,100,000", area: "338,455 km²", language: "Finnish, Swedish",
        flag: svg(`
            <rect width="${W}" height="${H}" fill="#ffffff"/>
            <rect x="46" y="0"  width="22" height="${H}" fill="#003580"/>
            <rect x="0"  y="47" width="${W}" height="22" fill="#003580"/>
            ${NC}`)
    }
];

// ════════════════════════════════════════════════════════════════
//  HISTORY DATA
// ════════════════════════════════════════════════════════════════
const historyEvents = [
    {
        year: "1917",
        title: "The October Revolution",
        desc: "The Bolshevik party, led by Vladimir Lenin, seizes power in Petrograd. The old Imperial order collapses, and a new socialist state is proclaimed."
    },
    {
        year: "1922",
        title: "Formation of the USSR",
        desc: "The Union of Soviet Socialist Republics is formally established, uniting the Russian, Ukrainian, Byelorussian, and Transcaucasian republics under a single federal framework."
    },
    {
        year: "1928–1941",
        title: "Industrialisation & the Five-Year Plans",
        desc: "Under Stalin, the USSR transforms from an agrarian society into a major industrial power through a series of ambitious state-directed economic plans."
    },
    {
        year: "1941–1945",
        title: "The Great Patriotic War",
        desc: "The Soviet Union bears the brunt of the war against Nazi Germany. At an immense cost of over 27 million lives, the Red Army defeats fascism and emerges as a global superpower."
    },
    {
        year: "1957",
        title: "Sputnik & the Space Race",
        desc: "The USSR launches Sputnik 1, the world's first artificial satellite, marking the beginning of the Space Age and cementing Soviet technological prestige."
    },
    {
        year: "1968–1975",
        title: "Western Expansion of the Union",
        desc: "Through a combination of political agreements and socialist solidarity, several Eastern and Southeastern European nations accede to the Union, broadening the federation to 30 member republics."
    },
    {
        year: "1985",
        title: "Era of Glasnost",
        desc: "General Secretary Gorbachev introduces sweeping reforms of openness and transparency. The Union enters a period of self-reflection and modernisation, strengthening its democratic institutions."
    },
    {
        year: "Present",
        title: "The Union Today",
        desc: "The Soviet Union endures — a reformed, modern federation of 30 republics. The Supreme Soviet remains the highest legislative body, shaping the future of over 450 million citizens."
    }
];

// ════════════════════════════════════════════════════════════════
//  STATS DATA
// ════════════════════════════════════════════════════════════════
const stats = [
    { icon: "🗺️", value: "30",        label: "Soviet Republics"  },
    { icon: "👥", value: "452M+",     label: "Total Population"  },
    { icon: "🌐", value: "23.5M km²", label: "Total Area"        },
    { icon: "🏙️", value: "Moscow",    label: "Capital City"      },
    { icon: "⚙️", value: "1922",      label: "Year Founded"      },
    { icon: "⭐", value: "Discord",   label: "Platform"          }
];

// ════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    buildTimeline();
    buildStats();
    buildRepublicSelect();
    initScrollAnimations();
    initNavbar();
    initHamburger();
});

function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });
}

function initHamburger() {
    const btn = document.getElementById("nav-hamburger");
    const links = document.querySelector(".nav-links");
    btn.addEventListener("click", () => links.classList.toggle("open"));
}

function buildTimeline() {
    const container = document.getElementById("timeline-container");
    historyEvents.forEach(event => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.innerHTML = `
            <p class="timeline-year">${event.year}</p>
            <h3 class="timeline-title">${event.title}</h3>
            <p class="timeline-desc">${event.desc}</p>`;
        container.appendChild(item);
    });
}

function buildStats() {
    const container = document.getElementById("stats-container");
    stats.forEach((s, i) => {
        const card = document.createElement("div");
        card.className = "stat-card";
        card.style.transitionDelay = `${i * 0.07}s`;
        card.innerHTML = `
            <div class="stat-icon">${s.icon}</div>
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>`;
        container.appendChild(card);
    });
}

function buildRepublicSelect() {
    const select = document.getElementById("republic-select");
    republics.forEach((r, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = r.name;
        select.appendChild(opt);
    });
    select.addEventListener("change", () => {
        renderRepublicProfile(republics[parseInt(select.value)]);
    });
}

function renderRepublicProfile(rep) {
    const display = document.getElementById("republic-display");
    display.innerHTML = `
        <div class="republic-profile">
            <div class="republic-flag-display">${rep.flag}</div>
            <div class="republic-info">
                <h3>${rep.name}</h3>
                <p class="republic-native">${rep.native}</p>
                <div class="republic-meta">
                    <div class="meta-item">
                        <span class="meta-label">Capital</span>
                        <span class="meta-value">${rep.capital}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Largest City</span>
                        <span class="meta-value">${rep.city}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Population</span>
                        <span class="meta-value">${rep.population}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Area</span>
                        <span class="meta-value">${rep.area}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Official Language</span>
                        <span class="meta-value">${rep.language}</span>
                    </div>
                </div>
            </div>
        </div>`;
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll(".timeline-item, .stat-card").forEach(el => observer.observe(el));
}
