resources.map((resource) => {
    // Generer en liste med lenker fra sources
    const sourcesHtml = resource.sources.map(source => 
        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
    ).join(""); // Kombiner listen til én HTML-streng

    // Legg til denne ressursen i HTML-strengen
    html += `
        <section id="infoBox">
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>${sourcesHtml}</ul>
        </section>
    `;
});

// Fyll inn HTML med teksten
document.getElementById("content").innerHTML = html;