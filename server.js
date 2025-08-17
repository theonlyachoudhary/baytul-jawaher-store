const { start } = require("@medusajs/medusa/dist/commands/start");
const functions = require("firebase-functions");

// Export the Firebase function
exports.app = functions.https.onRequest(async (request, response) => {
  // Start Medusa
  await start({
    port: process.env.PORT || 9000,
    host: "0.0.0.0",
    database_url: process.env.DATABASE_URL // Your Render PostgreSQL URL
  });
});
