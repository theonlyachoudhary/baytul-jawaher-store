const { start } = require("@medusajs/medusa/dist/commands/start");

// Render expects port 10000 by default
process.env.PORT = process.env.PORT || 10000;

// Make sure to bind to 0.0.0.0 to accept all incoming requests
start({ port: process.env.PORT, host: "0.0.0.0" });
