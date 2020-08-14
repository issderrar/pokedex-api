let connection = require('../bin/connection')
class Pokemon
{

    static findAll (cb)
    {
        connection.query('SELECT * FROM pokemon', (err, rows) =>
            {
            if (err) throw err
            cb(rows)
            })
        }

    static findById (id,cb)
    {
        connection.query('SELECT * FROM pokemon WHERE pok_id = ?', [id], (err, rows) =>
        {
            if (err) throw err
            cb(rows)
        })
    }

    }



module.exports = Pokemon
