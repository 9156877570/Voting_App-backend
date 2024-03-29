const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const db = require("./db/db")
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(express.json())



const personrouts = require('./routes/personRouts')
const candidateRouts = require('./routes/candidate')
app.use('/person', personrouts)
app.use('/candidate', candidateRouts)



app.get('/', (req, res) => {
    res.send("Welcome To Voting Application ")
})




app.listen(process.env.PORT, () => {
    console.log("Server Started On ", process.env.PORT)
})
