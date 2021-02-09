const express = require('express')
const db = require('../config/database')
const Gig = require('../models/Gig')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const gigs = await Gig.findAll()
        console.log(gigs)
        res.status(200).json({
            success: true,
            data: gigs
        })
    } catch (error) {
        console.log('Error :', error)
    }
   
})


module.exports = router