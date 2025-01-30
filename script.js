// Lager en array for alle knappene som skiller hvilken tekst som skal vises
const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];
let activeButton = "HTML"

// Kilde brukt for å lage funksjonen https://www.w3schools.com/jsref/jsref_substring.asp
// Deklarerer en funksjon som sier at button-IDen "sanity" er det samme som "Sanity and headless CMS"
function getCategoryId(category) {
  return category === "Sanity and headless CMS" ? category.substring(0, 6) : category;
}

// Legger til event listeners for knappene
// .map for å kunne peke på spesifikk kategori
categories.map((category) => {
  document.getElementById(getCategoryId(category)).addEventListener("click", () => {
    // Funksjonen viser hvilken kategori som skal 
    // vises basert på hvilken som er trykket på
    displayCategories(category);
  });
});

// Deklarerer en funksjon for å vise informasjon basert på kategori
function displayCategories(category) {
  // Bruker .filter() for å filtrere gjennom resources for at kategoriene skal være 
  // lik som den som har blitt trykket på
  const resource = resources.filter((res) => res.category === category)[0];
  // Skriver inn i HTML via document.getElementById("textBox").innerHTML
  // Lager en template litterate for å kunne legge inn informasjonen
  document.getElementById("textBox").innerHTML = `    
    <article>
      <h3>${resource.category}</h3>
      <p>${resource.text}</p>
      <ul>
        ${resource.sources.map((source) => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
      </ul>
    </article>
  `;
    // bruker .map for å kunne skille mellom URL-en og tittelen til kildene.
    // .join("") blir brukt å fjerne komma som .map genererer mellom tekststrengene

    // Ved trykk på en knapp for matchende ID class-en "active" og fjerner den som har classen "active" samtidig
    document.getElementById(getCategoryId(activeButton)).classList.remove("active");
    document.getElementById(getCategoryId(category)).classList.add("active");
    activeButton = category;
}

// Kaller på displayCateories og peker spesifikkt på HTML 
// for at HTML skal være tilstedet ved oppstart av side
displayCategories("HTML");
