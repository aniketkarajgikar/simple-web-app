# Simple Azure Web App

This repo contains a minimal Node.js web app that displays:

This is Aniket Karajgikar, Welcome!

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:8080

## Deploy to Azure App Service

1. Create a new Azure App Service (Linux or Windows) using Node.js.
2. Configure the deployment source to this repository.
3. Azure will run `npm start` using the `start` script in `package.json`.
4. The app will be available at the generated Azure URL.
