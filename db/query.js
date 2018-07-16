const knex = require('./knexConfig.js')

function getStudents(){
  return knex('students')
    .select()
    .orderBy('id', 'desc')
}

function getStudentsById(id){
  return knex('students')
    .select()
    .where('id', id).first()
}

module.exports = {
  getStudents,
  getStudentsById
}
