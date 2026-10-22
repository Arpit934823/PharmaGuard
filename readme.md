# 🧬 PharmaGuard – AI-Powered Pharmacogenomic Risk Assessment System

> **For educational and research use only. Not medical advice.**

## 🚀 Live Demo

Deploy your own in minutes (see [Deploy to Netlify](#-deploy-to-netlify) below).

---

## 📌 Project Overview

PharmaGuard is a pharmacogenomic analysis platform that parses patient VCF (Variant Call Format v4.2) files, analyzes genetic variants, and provides intelligent drug risk assessments: **Safe**, **Adjust Dosage**, **Ineffective**, **Toxic**, and **High Risk**.

The system is deployed as a **single Netlify site** — the static React frontend and the Express backend both live in the same repo. The backend runs as a Netlify Function (serverless), so there is no persistent server and no cold-start sleeping.

---

## 🏗️ Architecture

```
React (Vite + JSX) frontend  [frontend/dist → Netlify CDN]
        ↓ /api/* same-origin
Netlify Function              [netlify/functions/api.mjs]
        ↓ imports
Express app                   [backend/server.js]
        ↓
VCF Parser → Risk Engine → Clinical Recommendations → LLM Explainer
        ↓
JSON Risk Assessment Response
```

---

## 🛠️ Tech Stack

### Frontend
- React 19 (Vite)
- Vanilla CSS
- Fetch API

### Backend
- Node.js 20 (ESM)
- Express 4
- multer (multipart/form-data, memory storage)
- serverless-http (Netlify Function bridge)

---

## ⚙️ Local Development

### Prerequisites
- Node.js 20+
- npm

### 1. Clone the repo

```bash
git clone https://github.com/your-username/RIFT-farmaguard.git
cd RIFT-farmaguard
```

### 2. Install root dependencies (includes serverless-http)

```bash
npm install
```

### 3. Start the backend (standalone Express server on port 3001)

```bash
cd backend
npm install
npm start
```

### 4. Start the frontend dev server (in a new terminal)

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api/*` requests to `http://localhost:3001`, so the frontend at `http://localhost:5173` talks directly to the local backend. No `VITE_API_URL` env var is needed.

### Optional: run the full Netlify environment locally

```bash
npm install -g netlify-cli
netlify dev
```

This simulates the Netlify Function + CDN on `http://localhost:8888`.

---

## 📡 API

| Endpoint | Method | Description |
|---|---|---|
| `/` | GET | Service discovery |
| `/api/health` | GET | Health check |
| `/api/drugs` | GET | Supported drug list |
| `/api/analyze` | POST | Core analysis (form-data: `vcf_file`, `drugs`) |

### Upload limit: **4 MB**

Netlify Functions have a ~6 MB body cap; base64 encoding of multipart data inflates size, so the server enforces 4 MB to stay safely within the limit.

### Example curl

```bash
curl -X POST https://your-site.netlify.app/api/analyze \
  -F "vcf_file=@backend/sample.vcf" \
  -F "drugs=Warfarin,Codeine"
```

---

## 🚀 Deploy to Netlify

1. **Push this repo to GitHub** (or GitLab / Bitbucket).
2. Log in to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Select your repository.
4. Build settings are **auto-detected from `netlify.toml`** — no manual configuration needed:
   - Build command: `npm install && cd frontend && npm install && npm run build`
   - Publish directory: `frontend/dist`
   - Functions directory: `netlify/functions`
   - Node version: 20
5. Click **Deploy site**.

No environment variables are required for a standard deployment.

---

## 🔥 Key Features

- VCF v4.2 parsing
- Drug–gene interaction logic (CPIC-aligned)
- Risk categorization: Safe / Adjust Dosage / Ineffective / Toxic / High Risk
- Confidence score calculation
- Clinical recommendations
- AI-generated plain-language explanations
- Interactive results dashboard with JSON export
- Serverless deployment — no cold-start sleeping

---

## 👥 Team

- Anant Rai
- Ujjwal Singh

---

## 📜 License

Developed for academic purposes. Not intended for clinical use.
