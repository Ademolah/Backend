import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import compression from "compression"
import mongoose from "mongoose"
import router from "./router"


const app = express()

app.use(cors({
    credentials: true
}))


app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/', router())


const server = http.createServer(app)


const MONGO_URL = "mongodb://127.0.0.1:27017/charlesDB"

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))

server.listen(3000, ()=> {
    console.log("listening on port 3000 ...")
})