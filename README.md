# Nordic Devices WebApp

Dette prosjektet er en enkel webapplikasjon for **Nordic Devices AS**.  
Siden presenterer selskapet, ansatte, produkter, tjenester og teknisk løsning.

Prosjektet passer til case **IT-utvikling**, der løsningen skal være enkel å videreutvikle, fungere på mobil og PC, bruke et passende rammeverk og kunne kjøres som Docker image.

## Teknologi

- React
- Vite
- Docker
- Nginx
- Responsivt design

## Struktur

```text
nordic-devices-web/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
└── README.md
```

## Kjør lokalt på utviklermaskin

Installer avhengigheter:

```bash
npm install
```

Start utviklingsserver:

```bash
npm run dev
```

Åpne deretter adressen som vises i terminalen, vanligvis:

```text
http://localhost:5173
```

## Bygg prosjektet

```bash
npm run build
```

## Kjør med Docker

Bygg Docker image:

```bash
docker build -t nordic-devices-web .
```

Start container:

```bash
docker run -d -p 80:80 --name nordic-devices-web nordic-devices-web
```

Åpne i nettleseren:

```text
http://localhost
```

På Ubuntu Server brukes serverens IP-adresse, for eksempel:

```text
http://172.16.100.216
```

## Kjør med Docker Compose

```bash
docker compose up -d
```

Stopp løsningen:

```bash
docker compose down
```

## Sikkerhetsvurdering

I testmiljø er port 80 åpen for HTTP. I produksjon bør løsningen sikres med HTTPS/TLS.  
Serveren bør også sikres med:

- SSH for sikker tilkobling
- UFW firewall
- sterke passord eller SSH-nøkler
- kun nødvendige porter åpne

## Videreutvikling

Mulige forbedringer:

- Legge til innlogging for administrator
- Koble nettsiden til en database
- Lage et administrasjonspanel for ansatte og produkter
- Sette opp HTTPS med sertifikat
- Legge til automatisert deployment fra GitHub
