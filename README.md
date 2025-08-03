 Full-stack project that touches on API integration, logging, basic authentication, and admin UI.
# Ecosystem API Layer (Universal Onboarding Engine)

A single, universal API endpoint to enroll users and sync them across multiple platforms — including MailerLite, Weather API, or mock CRMs — while logging transactions and offering a lightweight admin dashboard.

---

## Features

-  **Universal `/api/enroll` endpoint**
-  **API key-based platform validation**
-  Modular Express.js structure
-  Transaction logging in JSON
-  MailerLite integration
-  Weather API support (OpenWeatherMap)
-  HTML-based Admin Dashboard (view stats, add platforms) - Not included
-  cURL/Postman-friendly endpoints

---

## Tech Stack

- Node.js 18+
- Express
- JSON file storage
- MailerLite API
- OpenWeatherMap API
- Bootstrap (for dashboard styling)


## ⚙️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/ecosystem-api.git
cd ecosystem-api
npm install
### 2. Configure .env
MAILERLITE_API_KEY=your-mailerlite-api-key
WEATHER_API_KEY=your-openweather-api-key
PORT=3000
### 3. Configure platforms

Edit config/platforms.json to define valid platform → API key mappings

### 4. ▶️ Run the Server
node server.js
