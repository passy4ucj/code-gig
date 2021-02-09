const express = require('express')
const db = require('../config/database')
const Gig = require('../models/Gig')

const router = express.Router()


// Get gigs
router.get('/', async(req, res) => {
    try {
        const gigs = await Gig.findAll()
        // res.status(200).json(gigs)
        // console.log(gigs)
        res.render('gigs', {
           gigs
        })
        
        
    } catch (error) {
        console.log('Error :', error)
    }
   
})

// Display add gig form
router.get('/add', (req, res) => res.render('add'))


// Add a Gig
router.post('/add', async(req, res) => {
    const data = {
        title: 'SImple Wordpress developer',
        technologies: 'wordpress',
        budget: '$300',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        contact_email: 'passy@example.com'
    }

    let { title, technologies, budget, description, contact_email } = data
    try {
        // Insert into table
        await Gig.create({
            title,
            technologies,
            description,
            budget,
            contact_email
        })
    
        res.redirect('/gigs')

    } catch (error) {
        console.log('Error: ', error)
    }

    
   
})


module.exports = router