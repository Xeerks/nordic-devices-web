import { useEffect, useState } from "react"

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
    description: "Kan lese om selskapet, se tjenester og sende forespørsel.",
  },
]

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  const [orderForm, setOrderForm] = useState({
    product: "",
    quantity: "1",
    name: "",
    email: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({})
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem("nordicCookiesAccepted")

    if (savedConsent === "true") {
      setCookiesAccepted(true)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem("nordicCookiesAccepted", "true")
    setCookiesAccepted(true)
  }

  const handleOrderChange = (event) => {
    const { name, value } = event.target

    setOrderForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))

    setOrderSubmitted(false)
  }

  const validateOrderForm = () => {
    const errors = {}

    if (!orderForm.product) {
      errors.product = "Velg et produkt eller en tjeneste."
    }

    if (!orderForm.quantity || Number(orderForm.quantity) < 1) {
      errors.quantity = "Antall må være minst 1."
    }

    if (!orderForm.name.trim()) {
      errors.name = "Skriv inn navn."
    }

    if (!orderForm.email.trim()) {
      errors.email = "Skriv inn e-postadresse."
    } else if (!orderForm.email.includes("@")) {
      errors.email = "E-postadressen må inneholde @."
    }

    setFormErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleOrderSubmit = (event) => {
    event.preventDefault()

    if (!validateOrderForm()) {
      return
    }

    setOrderSubmitted(true)
  }

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
            <a href="#kontakt">Bestilling</a>
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
            <a className="secondaryButton" href="#kontakt">
              Send forespørsel
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
            Denne webapplikasjonen er laget som en firmaside og en prototype
            for videre utvikling. Den kan kjøres lokalt under utvikling eller
            pakkes inn i et Docker image.
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
              bør trafikken sikres med HTTPS/TLS. Tilgang til server bør også
              sikres med SSH-nøkler i stedet for bare passord.
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
          <p className="eyebrow">Prototype for bestilling</p>
          <h2>Send en forespørsel om produkt eller tjeneste</h2>
          <p>
            Dette er en enkel prototype som viser hvordan Nordic Devices senere
            kan bygge videre mot bestilling og betaling på nettsiden.
          </p>

          <div className="prototypeSteps" aria-label="Foreslått bestillingsflyt">
            <span>1. Velg tjeneste</span>
            <span>2. Send forespørsel</span>
            <span>3. Bekreft avtale</span>
            <span>4. Betaling i fremtidig løsning</span>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleOrderSubmit} noValidate>
          <label htmlFor="product">
            Produkt eller tjeneste
            <select
              id="product"
              name="product"
              value={orderForm.product}
              onChange={handleOrderChange}
              aria-describedby={formErrors.product ? "product-error" : undefined}
            >
              <option value="">Velg produkt eller tjeneste</option>
              <option value="Laptop-pakker">Laptop-pakker</option>
              <option value="Nettverksutstyr">Nettverksutstyr</option>
              <option value="Servermiljø">Servermiljø</option>
              <option value="Supportavtale">Supportavtale</option>
              <option value="Webutvikling">Webutvikling</option>
            </select>

            {formErrors.product && (
              <span className="formError" id="product-error">
                {formErrors.product}
              </span>
            )}
          </label>

          <label htmlFor="quantity">
            Antall
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              value={orderForm.quantity}
              onChange={handleOrderChange}
              aria-describedby={formErrors.quantity ? "quantity-error" : undefined}
            />

            {formErrors.quantity && (
              <span className="formError" id="quantity-error">
                {formErrors.quantity}
              </span>
            )}
          </label>

          <label htmlFor="name">
            Navn
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ditt navn"
              value={orderForm.name}
              onChange={handleOrderChange}
              aria-describedby={formErrors.name ? "name-error" : undefined}
            />

            {formErrors.name && (
              <span className="formError" id="name-error">
                {formErrors.name}
              </span>
            )}
          </label>

          <label htmlFor="email">
            E-post
            <input
              id="email"
              name="email"
              type="email"
              placeholder="navn@firma.no"
              value={orderForm.email}
              onChange={handleOrderChange}
              aria-describedby={formErrors.email ? "email-error" : undefined}
            />

            {formErrors.email && (
              <span className="formError" id="email-error">
                {formErrors.email}
              </span>
            )}
          </label>

          <label htmlFor="message">
            Kommentar
            <textarea
              id="message"
              name="message"
              placeholder="Skriv kort hva bedriften trenger hjelp med."
              value={orderForm.message}
              onChange={handleOrderChange}
            />
          </label>

          <button type="submit">Send forespørsel</button>

          {orderSubmitted && (
            <div className="orderSummary" role="status" aria-live="polite">
              <h3>Forespørsel registrert</h3>
              <p>
                Dette er en prototype. I en ferdig løsning ville forespørselen
                blitt sendt videre til et bestillingssystem og eventuelt en
                sikker betalingsløsning.
              </p>

              <dl>
                <div>
                  <dt>Valgt tjeneste</dt>
                  <dd>{orderForm.product}</dd>
                </div>
                <div>
                  <dt>Antall</dt>
                  <dd>{orderForm.quantity}</dd>
                </div>
                <div>
                  <dt>Kunde</dt>
                  <dd>{orderForm.name}</dd>
                </div>
                <div>
                  <dt>E-post</dt>
                  <dd>{orderForm.email}</dd>
                </div>
              </dl>

              <p className="nextStep">
                Neste steg i en ferdig løsning: kunden bekrefter bestillingen,
                systemet oppretter ordre, og betaling kan gjennomføres via en
                ekstern betalingsleverandør.
              </p>
            </div>
          )}
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Nordic Devices AS</p>
        <p>Utviklet som del av IT-utvikling case.</p>
      </footer>

      {!cookiesAccepted && (
        <section
          className="cookie-banner"
          aria-label="Informasjon om cookies og personvern"
        >
          <div>
            <h2>Cookies og personvern</h2>
            <p>
              Denne nettsiden bruker nødvendige cookies for å forbedre
              brukeropplevelsen og huske valgene dine. Du må aktivt godkjenne
              bruken før samtykket lagres.
            </p>
          </div>

          <button
            type="button"
            className="cookie-button"
            onClick={handleCookieAccept}
          >
            Godta cookies
          </button>
        </section>
      )}
    </main>
  )
}

export default App