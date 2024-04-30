const express = require("express") // framework server nodejs
const morgan = require("morgan") // describe petitions cli
const axios = require("axios") // requests
const cors = require("cors") // safety
const { populate } = require("dotenv") // entorne variables

require('dotenv').config()  

const app = express()

let port = process.env.PORT || 8080

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.get("/health", (req, res) => {
    res.send("Todo OK!")
})

app.get("/rick/:id", (req, res) => {
    const END_POINT = `https://rickandmortyapi.com/api/character/${req.params.id}`

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(error){
            console.log(error)
            res.send(error)
        })
})

app.listen(port, () => {
    console.log("Server on port " + port)
})