let express = require ('express');
let router = express.Router();

// Get all Pokemons
router.get('/', (req, res) => {
    let pokemon = require ('../models/pokemon');
    pokemon.find((rows) => {
        res.send(rows)
    });
})

// Get all Pokemons
router.get('/:id', (req, res) => {
    res.send('Pokemon avec l\'id ' + req.params.id );
})

module.exports = router;