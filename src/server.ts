import "reflect-metadata"
import express from "express"
import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
    next()
})
app.use(routes)
app.listen(3000, () => console.log('Server is running...'))