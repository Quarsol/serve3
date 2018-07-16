const config = process.env.NODE_ENV || 'development'
const environment = require('../knexfile.js')
const knex = require('knex')(environment[config])

module.exports = knex
