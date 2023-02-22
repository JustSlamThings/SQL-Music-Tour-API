//DEPENDENCIES

const bands= require('express').Router();
const db=require('../models');
const { Band } = db;

// FIND ALL BANDS  The Index Route
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND  The Show Route
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        });
        res.status(200).json(foundBand);
    } catch (error) {
        res.status(500).json(error);
    }
})

// CREATE A BAND  The Create Route
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

// UPDATE A BAND  The Update Route
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

// DELETE A BAND   The Delete Route
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = bands;