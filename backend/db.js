const sql = require("mssql");

const config = {
  server: 'localhost\\MADHAVISQLEXPRESS',
  database: 'sanirodb',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    trustedConnection: true  // Windows Authentication
  },
  port: 1433
};

async function testConnection() {
  let pool;
  try {
    pool = await sql.connect(config);
    const result = await pool.request().query('SELECT 1 as test');
    console.log("✅ Connection successful! Test query result:", result.recordset);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    if (pool) await pool.close();
    process.exit(); // Exit script after test
  }
}

testConnection();