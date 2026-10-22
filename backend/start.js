/**
 * start.js - Standalone HTTP server entry point.
 *
 * Run with: node start.js  (or via npm start)
 *
 * This is the ONLY place app.listen() is called.
 * The Express app itself (server.js) only exports the app — it never listens.
 * This ensures the Netlify Function can safely import server.js without
 * accidentally starting an HTTP server.
 */

import app from './server.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🧬 PharmaGuard API running on http://localhost:${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/api/health`);
    console.log(`   Drugs:  http://localhost:${PORT}/api/drugs`);
});
