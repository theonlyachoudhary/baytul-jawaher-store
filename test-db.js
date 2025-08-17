const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Successfully connected to PostgreSQL');
    await client.release();
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } finally {
    await pool.end();
  }
}

testConnection();
