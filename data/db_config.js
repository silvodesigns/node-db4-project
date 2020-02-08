const knex = require('knex');

const config = require('../knexfile.js');
//select the development object from knex
const db = knex(config.development);
//export for use in our codebase
module.exports = db;
