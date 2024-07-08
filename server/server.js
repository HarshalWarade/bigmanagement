const express = require('express')
const cors = require('cors')
const app = express()
const corsOption = {
    origin: 'http://localhost:5173',
    methods: "GET, PUT, POST, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOption))
const dotenv = require('dotenv')
dotenv.config({path: 'config.env'})

const connectDb = require('./utils/db')

const port = 3300
app.use(express.json())

const authRoute = require('./router/auth.route')

app.use("/api/auth", authRoute)




app.get('/', (req, res) => {
    return res.status(200).json({msg: "Server is active!"})
})

connectDb().then(() => {
    app.listen(port, (err) => {
        if(err) {
            return res.status(500).json({msg: "Server failed!"})
        } else {
            console.log(`Server is active on port ${port}`)
        }
    })
}).catch((err) => {
    console.log("error at server in setting up connection to the database file")
})