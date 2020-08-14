let express = require ('express');
let router = express.Router();
let parser = require ('body-parser');

// Get all Pokemons
router.get('/', (req, res) => {
    let pokemon = require ('../models/pokemon');
    pokemon.findAll((rows) => {
        res.send(rows)
    });
})

// Get one pokemon by id
router.get('/:id', (req, res) => {
    let pokemon = require ('../models/pokemon');
    pokemon.findById(req.params.id,(rows) => {
        res.send(rows)
    });
})

module.exports = router;