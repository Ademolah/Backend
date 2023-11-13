import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import compression from "compression"
import mongoose from "mongoose"


const app = express()

app.use(cors({
    credentials: true
}))


app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())


const server = http.createServer(app)

server.listen(3000, ()=> {
    console.log("listening on port 3000 ...")
})

const MONGO_URL = "mongodb://127.0.0.1:27017/"

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))