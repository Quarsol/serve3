module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/serve3'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
