let connection = require('../bin/connection')
class Pokemon
{

    static find (cb)
    {
        connection.query('SELECT * FROM pokemon', (err, rows) =>
            {
            if (err) throw err
            cb(rows)
            })
        }
    }

module.exports = Pokemon
