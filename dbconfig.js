const config = {
  user: "sa",
  password: "p4s5w0rD",
  database: "Test_db",
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, 
    trustServerCertificate: true
  }
}

module.exports = {
 
  config
}
