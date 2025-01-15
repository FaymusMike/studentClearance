const db = require('./database');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    process.exit();
  }
}

testConnection();