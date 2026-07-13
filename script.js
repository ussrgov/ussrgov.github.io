const republics = [
    "Russian SFSR",
    "Ukrainian SSR",
    "Byelorussian SSR",
    "Uzbek SSR",
    "Kazakh SSR",
    "Georgian SSR",
    "Azerbaijan SSR",
    "Lithuanian SSR",
    "Moldavian SSR",
    "Latvian SSR",
    "Kirghiz SSR",
    "Tajik SSR",
    "Armenian SSR",
    "Turkmen SSR",
    "Estonian SSR",
    "Czech SSR",
    "Polish SSR",
    "Slovak SSR",
    "Hungarian SSR",
    "Romanian SSR",
    "Bulgarian SSR",
    "Macedonian SSR",
    "Kosovan SSR",
    "Serbian SSR",
    "Montenegrin SSR",
    "Albanian SSR",
    "Bosnian and Herzegovinian SSR",
    "Croatian SSR",
    "Slovenian SSR",
    "East German SSR"
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("republics-container");

    republics.forEach((republic, index) => {
        const card = document.createElement("div");
        card.className = "republic-card";
        
        // Add a staggered animation delay based on index
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="republic-flag"></div>
            <h3 class="republic-name">${republic}</h3>
        `;
        
        container.appendChild(card);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
