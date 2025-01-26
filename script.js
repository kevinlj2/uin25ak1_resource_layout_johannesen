// Lager en array for alle knappene som skller hvilken tekst som skal vises
const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];

// .map for å kunne peke på spesefikt object
categories.map((category) => {
  document.getElementById(category).addEventListener("click", () => {
    // Ved å bruke .filter() kan man filtrere etter gitt parametere
    // I linjen under sier koden at hvis kategorien samsvarer 
    // med knappen som ble trykt på, så skriver den ut samsvarende tekst
    const resource = resources.filter((res) => res.category === category)[0];

    // Skriver inn i HTML
    // Lager en template litterate for å kunne legge inn informasjonen
    // .join("") blir brukt å fjerne komma som .map genererer mellom tekststrengene
    document.getElementById("textBox").innerHTML = `    
      <article>
        <h3>${resource.category}</h3>
        <p>${resource.text}</p>
        <ul>
          ${resource.sources.map((source) => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
        </ul>
      </article>
    `;
  });
});
