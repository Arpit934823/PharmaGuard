/**
 * Netlify Function: api.mjs
 *
 * Wraps the PharmaGuard Express app with serverless-http so that
 * Netlify Functions can handle all /api/* requests without a persistent server.
 *
 * server.js exports the Express app without calling app.listen(), so this
 * import is safe — no HTTP server is started.
 *
 * Multipart/form-data (file uploads) are handled by setting `binary: true`
 * in serverless-http so the raw binary body is passed through to multer correctly.
 */

import serverless from 'serverless-http';
import app from '../../backend/server.js';

// Wrap Express app for Lambda/Netlify Functions.
// binary: true ensures multipart bodies (file uploads) are not corrupted.
const handler = serverless(app, { binary: true });

export { handler };
