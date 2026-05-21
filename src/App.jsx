import { useEffect, useState } from "react"
import "./App.css"

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

const serviceOptions = [
  {
    id: "webutvikling-startpakke",
    name: "Webutvikling startpakke",
    price: 14900,
    unit: "prosjekt",
    description:
      "En enkel og profesjonell nettside for små bedrifter, med responsivt design og grunnleggende SEO.",
  },
  {
    id: "supportavtale",
    name: "IT-supportavtale",
    price: 1290,
    unit: "måned",
    description:
      "Fast supportavtale for mindre bedrifter med hjelp til PC, brukere, nettverk og programvare.",
  },
  {
    id: "nettverksoppsett",
    name: "Nettverksoppsett for kontor",
    price: 8900,
    unit: "oppsett",
    description:
      "Planlegging og oppsett av router, switch, Wi-Fi og enkel sikkerhetsvurdering.",
  },
  {
    id: "docker-miljo",
    name: "Docker testmiljø",
    price: 6900,
    unit: "oppsett",
    description:
      "Oppsett av Docker-basert testmiljø slik at utviklere kan kjøre løsningen likt på flere maskiner.",
  },
  {
    id: "sikkerhetssjekk",
    name: "Sikkerhetssjekk av webtjeneste",
    price: 4900,
    unit: "gjennomgang",
    description:
      "Kontroll av HTTPS, servertilgang, brannmur, grunnleggende risiko og anbefalte tiltak.",
  },
]

const services = [
  "Webutvikling for små og mellomstore bedrifter",
  "Docker-basert test- og utviklingsmiljø",
  "Oppsett av sikre nettverk",
  "IT-support og vedlikehold",
  "Sikkerhetsvurdering av webtjenester",
  "Rådgivning om videreutvikling av digitale løsninger",
]

const users = [
  {
    title: "Kunde",
    description:
      "Kan lese om tjenester, velge en løsning og sende en forespørsel.",
  },
  {
    title: "Ansatt",
    description:
      "Kan bruke forespørsler fra kunder som grunnlag for videre oppfølging.",
  },
  {
    title: "Utvikler",
    description:
      "Kan starte prosjektet lokalt, teste endringer og bygge Docker image.",
  },
  {
    title: "Administrator",
    description:
      "Kan administrere server, Docker-container, HTTPS og sikker tilgang.",
  },
]

const paymentMethods = [
  {
    id: "kort-prototype",
    label: "Kortbetaling",
    description: "Simulert kortbetaling. Ingen ekte betaling gjennomføres.",
  },
  {
    id: "faktura",
    label: "Faktura",
    description: "Kunden får tilbud og faktura etter manuell bekreftelse.",
  },
]

function formatPrice(value) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(value)
}

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  const [orderForm, setOrderForm] = useState({
    product: "",
    name: "",
    email: "",
    message: "",
    paymentMethod: "faktura",
  })

  const [formErrors, setFormErrors] = useState({})
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const selectedService = serviceOptions.find(
    (service) => service.id === orderForm.product
  )

  const estimatedTotal = selectedService ? selectedService.price : 0

  useEffect(() => {
    const cookies = document.cookie.split("; ")

    if (cookies.includes("nordicCookiesAccepted=true")) {
      setCookiesAccepted(true)
    }
  }, [])

  const handleCookieAccept = () => {
    document.cookie =
      "nordicCookiesAccepted=true; max-age=31536000; path=/; SameSite=Lax"
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
      errors.product = "Velg en tjeneste."
    }


    if (!orderForm.name.trim()) {
      errors.name = "Skriv inn navn."
    }

    if (!orderForm.email.trim()) {
      errors.email = "Skriv inn e-postadresse."
    } else if (!orderForm.email.includes("@")) {
      errors.email = "E-postadressen må inneholde @."
    }

    if (!orderForm.paymentMethod) {
      errors.paymentMethod = "Velg betalingsmåte."
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
          <a className="logo brandName" href="#top" aria-label="Nordic Devices AS">
            Nordic Devices
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
          <p className="eyebrow">IT-utvikling og sikre webtjenester</p>
          <h1>Digitale løsninger for små og mellomstore bedrifter</h1>
          <p className="lead">
            Nordic Devices AS leverer webutvikling, Docker-baserte testmiljøer,
            nettverksoppsett og sikker drift for bedrifter som ønsker en
            moderne og oversiktlig IT-løsning.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#tjenester">
              Se tjenester
            </a>
            <a className="secondaryButton" href="#kontakt">
              Start bestilling
            </a>
          </div>

          <div className="stats" aria-label="Nøkkelinformasjon">
            <article>
              <strong>Docker</strong>
              <span>Containerbasert drift</span>
            </article>
            <article>
              <strong>HTTPS</strong>
              <span>Sikret med SSL/TLS</span>
            </article>
            <article>
              <strong>WCAG</strong>
              <span>Bedre tilgjengelighet</span>
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
            for videre utvikling. Løsningen kan kjøres lokalt under utvikling,
            pakkes i Docker og publiseres på en Ubuntu Server med HTTPS.
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
            <p className="eyebrow">Tjenester og priser</p>
            <h2>Hva Nordic Devices tilbyr</h2>
          </div>
          <p>
            Prisene er veiledende og brukes i denne prototypen for å vise hvordan
            en fremtidig bestilling og betaling kan fungere.
          </p>
        </div>

        <div className="productGrid">
          {serviceOptions.map((service) => (
            <article className="productCard" key={service.id}>
              <p className="priceTag">{formatPrice(service.price)}</p>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="serviceUnit">Pris per {service.unit}</span>
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
              <li>HTTPS med self-signed SSL/TLS-sertifikat</li>
              <li>SSH som sikker tilkoblingsmetode til serveren</li>
            </ul>
          </article>

          <article className="infoPanel highlightPanel">
            <h3>Sikkerhetsvurdering</h3>
            <p>
              I testmiljøet brukes self-signed certificate. Nettleseren viser
              derfor en advarsel, men trafikken går likevel over HTTPS. I et
              produksjonsmiljø bør sertifikatet komme fra en offentlig
              sertifikatutsteder.
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
          <p className="eyebrow">Prototype for bestilling og betaling</p>
          <h2>Bestill en IT-tjeneste</h2>
          <p>
            Dette er en prototype som viser sentrale deler av en fremtidig
            bestillings- og betalingsløsning. Ingen ekte betaling gjennomføres.
          </p>

          <div className="prototypeSteps" aria-label="Foreslått bestillingsflyt">
            <span>1. Velg tjeneste</span>
            <span>2. Se estimert pris</span>
            <span>3. Velg betalingsmåte</span>
            <span>4. Send forespørsel</span>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleOrderSubmit} noValidate>
          <label htmlFor="product">
            Tjeneste
            <select
              id="product"
              name="product"
              value={orderForm.product}
              onChange={handleOrderChange}
              aria-describedby={formErrors.product ? "product-error" : undefined}
            >
              <option value="">Velg tjeneste</option>
              {serviceOptions.map((service) => (
                <option value={service.id} key={service.id}>
                  {service.name} – {formatPrice(service.price)}
                </option>
              ))}
            </select>

            {formErrors.product && (
              <span className="formError" id="product-error">
                {formErrors.product}
              </span>
            )}
          </label>

          {selectedService && (
            <div className="selectedServiceBox">
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
              <strong>
                {formatPrice(selectedService.price)} per {selectedService.unit}
              </strong>
            </div>
          )}


          <div className="pricePreview" aria-live="polite">
            <span>Estimert totalpris</span>
            <strong>{selectedService ? formatPrice(estimatedTotal) : "—"}</strong>
          </div>

          <fieldset className="paymentMethods">
            <legend>Betalingsmåte</legend>

            {paymentMethods.map((method) => (
              <label className="paymentOption" key={method.id}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={orderForm.paymentMethod === method.id}
                  onChange={handleOrderChange}
                />
                <span>
                  <strong>{method.label}</strong>
                  <small>{method.description}</small>
                </span>
              </label>
            ))}

            {formErrors.paymentMethod && (
              <span className="formError">{formErrors.paymentMethod}</span>
            )}
          </fieldset>

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

          {orderSubmitted && selectedService && (
            <div className="orderSummary" role="status" aria-live="polite">
              <h3>Forespørsel registrert</h3>
              <p>
                Dette er en prototype. I en ferdig løsning ville ordren blitt
                sendt til et bestillingssystem, og betaling kunne blitt
                gjennomført via en sikker betalingsleverandør.
              </p>

              <dl>
                <div>
                  <dt>Valgt tjeneste</dt>
                  <dd>{selectedService.name}</dd>
                </div>
                <div>
                  <dt>Antall</dt>
                  <dd>{orderForm.quantity}</dd>
                </div>
                <div>
                  <dt>Totalpris</dt>
                  <dd>{formatPrice(estimatedTotal)}</dd>
                </div>
                <div>
                  <dt>Betaling</dt>
                  <dd>
                    {
                      paymentMethods.find(
                        (method) => method.id === orderForm.paymentMethod
                      )?.label
                    }
                  </dd>
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
                systemet oppretter ordre, og betalingen håndteres av en ekstern
                betalingsleverandør. Ingen betaling er gjennomført i denne
                prototypen.
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
              Denne nettsiden bruker nødvendige cookies for å huske valgene
              dine. Du må aktivt godkjenne bruken før samtykket lagres.
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