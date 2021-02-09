const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')


// Database
const db = require('./config/database')


// Test DB
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.log('Unable to connect to the database: ' + err))

// Test DB using async and await
// const authenticate = async() => {
//     try {
//         await db.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// authenticate()



const app = express()

// JSON BODY PARSER
app.use(express.json())


app.get('/api', (req, res) => {
    res.send('API IS RUNNING')
})

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`)
})
