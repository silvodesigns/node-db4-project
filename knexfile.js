module.exports = {
development: {
    client:'sqlite3',
    connection : {
        filename: './data/database.db3'
    },
    useNullAsDefault: true,
    // generates migration files in a data/migrations/ folder
    migrations: {
        directory: './data/migrations'
      }

  }
};
