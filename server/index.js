const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config()
const connectDB = require('./db/connect')

const agentRoute = require('./routes/agent')
const ticketRoute = require('./routes/ticket')


app.use(cors())


app.use(express.json())

app.use('/api/support-agents',agentRoute)
app.use('/api/support-tickets',ticketRoute)



const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , ()=>{
            console.log(`The server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()