const employees = [
  {
    name: "Anna Hansen",
    role: "Daglig leder",
    text: "Har ansvar for kunder, avtaler og videreutvikling av selskapet.",
  },
  {
    name: "Ola Berg",
    role: "IT-konsulent",
    text: "Setter opp nettverk, servere og sikre løsninger for kunder.",
  },
  {
    name: "Maja Nilsen",
    role: "Frontend-utvikler",
    text: "Utvikler moderne og brukervennlige nettsider og webapplikasjoner.",
  },
  {
    name: "Jonas Eriksen",
    role: "Driftsansvarlig",
    text: "Følger opp Docker, serverdrift, sikkerhet og dokumentasjon.",
  },
]

const services = [
  "Leie og administrasjon av IT-utstyr",
  "Oppsett av sikre nettverk",
  "Webutvikling og digitale tjenester",
  "Docker-basert testmiljø",
  "Support og vedlikehold",
  "Rådgivning innen IT-sikkerhet",
]

const products = [
  {
    title: "Laptop-pakker",
    description: "Ferdig klargjorte PC-er for små og mellomstore bedrifter.",
  },
  {
    title: "Nettverksutstyr",
    description: "Rutere, switcher og trådløse aksesspunkter til kontorbruk.",
  },
  {
    title: "Servermiljø",
    description: "Virtuelle servere for utvikling, testing og intern drift.",
  },
]

const users = [
  {
    title: "Administrator",
    description: "Kan administrere server, nettverk, sikkerhet og Docker-miljø.",
  },
  {
    title: "Utvikler",
    description: "Kan starte webapplikasjonen lokalt og teste endringer raskt.",
  },
  {
    title: "Ansatt",
    description: "Kan finne informasjon om tjenester, produkter og kontaktpunkter.",
  },
  {
    title: "Kunde",
    description: "Kan lese om selskapet og se hvilke løsninger som tilbys.",
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <nav className="navbar" aria-label="Hovedmeny">
          <a className="logo" href="#top" aria-label="Nordic Devices AS">
            <span className="logoMark">ND</span>
            <span>Nordic Devices</span>
          </a>

          <div className="navLinks">
            <a href="#om-oss">Om oss</a>
            <a href="#ansatte">Ansatte</a>
            <a href="#tjenester">Tjenester</a>
            <a href="#teknologi">Teknologi</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <section id="top" className="heroContent">
          <p className="eyebrow">IT-utstyr og digitale tjenester</p>
          <h1>Moderne IT-løsninger for små og mellomstore bedrifter</h1>
          <p className="lead">
            Nordic Devices AS leverer utstyr, nettverk, webutvikling og sikre
            testmiljøer basert på virtualisering og containerteknologi.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#tjenester">
              Se tjenester
            </a>
            <a className="secondaryButton" href="#teknologi">
              Teknisk løsning
            </a>
          </div>

          <div className="stats" aria-label="Nøkkelinformasjon">
            <article>
              <strong>Docker</strong>
              <span>Klar for containerdrift</span>
            </article>
            <article>
              <strong>SSH</strong>
              <span>Sikker servertilgang</span>
            </article>
            <article>
              <strong>Responsive</strong>
              <span>Fungerer på mobil og PC</span>
            </article>
          </div>
        </section>
      </header>

      <section id="om-oss" className="section twoColumns">
        <div>
          <p className="eyebrow">Om oss</p>
          <h2>En fleksibel IT-partner</h2>
        </div>
        <div className="textBlock">
          <p>
            Nordic Devices AS er et nystartet selskap som hjelper kunder med å
            ta i bruk moderne og oversiktlige IT-løsninger. Målet er å gjøre
            teknologien enkel å drifte, sikker i bruk og lett å videreutvikle.
          </p>
          <p>
            Denne webapplikasjonen er laget som en enkel firmaside og et
            utgangspunkt for videre utvikling. Den kan kjøres lokalt under
            utvikling eller pakkes inn i et Docker image.
          </p>
        </div>
      </section>

      <section id="ansatte" className="section">
        <p className="eyebrow">Team</p>
        <h2>Ansatte</h2>
        <div className="cardGrid">
          {employees.map((employee) => (
            <article className="card" key={employee.name}>
              <div className="avatar" aria-hidden="true">
                {employee.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3>{employee.name}</h3>
              <p className="role">{employee.role}</p>
              <p>{employee.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tjenester" className="section darkSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Produkter og tjenester</p>
            <h2>Det Nordic Devices tilbyr</h2>
          </div>
          <p>
            Løsningen er laget for å være tydelig, profesjonell og enkel å
            bygge videre på.
          </p>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.title}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>

        <ul className="serviceList">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section id="teknologi" className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Teknologi og drift</p>
            <h2>Bygget for lokal utvikling og testing</h2>
          </div>
          <p>
            Prosjektet er strukturert slik at andre utviklere enkelt kan starte
            løsningen, teste endringer og kjøre den i Docker.
          </p>
        </div>

        <div className="techLayout">
          <article className="infoPanel">
            <h3>Teknisk oppsett</h3>
            <ul>
              <li>React + Vite som rammeverk for webapplikasjonen</li>
              <li>Dockerfile for bygging av Docker image</li>
              <li>Ubuntu Server som test- og driftsmiljø</li>
              <li>SSH for sikker tilkobling til server</li>
              <li>UFW firewall med kun nødvendige porter åpne</li>
            </ul>
          </article>

          <article className="infoPanel highlightPanel">
            <h3>Sikkerhetsvurdering</h3>
            <p>
              I et lokalt testmiljø kan siden kjøres via HTTP. Ved produksjon
              bør trafikken sikres med HTTPS/TLS, og tilgang til server bør
              begrenses med sterke passord eller SSH-nøkler.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Brukere av systemet</p>
        <h2>Hvem kan bruke løsningen?</h2>
        <div className="userGrid">
          {users.map((user) => (
            <article className="userCard" key={user.title}>
              <h3>{user.title}</h3>
              <p>{user.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="section contactSection">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Klar for et mer strukturert IT-miljø?</h2>
          <p>
            Ta kontakt for en uforpliktende samtale om utstyr, nettverk,
            webutvikling eller drift.
          </p>
        </div>

        <form className="contactForm">
          <label>
            Navn
            <input type="text" placeholder="Ditt navn" />
          </label>
          <label>
            E-post
            <input type="email" placeholder="navn@firma.no" />
          </label>
          <label>
            Melding
            <textarea placeholder="Hva trenger bedriften hjelp med?" />
          </label>
          <button type="button">Send forespørsel</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Nordic Devices AS</p>
        <p>Utviklet som del av IT-utvikling case.</p>
      </footer>
    </main>
  )
}

export default App
