const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')



const app = express()

//JSON BODY PARSER
app.use(express.json())


app.get('/api', (req, res) => {
    res.send('API IS RUNNING')
})

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`)
})
