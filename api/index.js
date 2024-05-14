import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MONGODB!!");
    } catch (error) {
        handleError(error);
    }
}

mongoose.connection.on("disconneted", ()=>{
    console.log("MongoDB disconnected!!!");
})

mongoose.connection.on("conneted", ()=>{
    console.log("MongoDB connected!!!");
})

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.listen(3000,  () => {
    connect()
    console.log("Connected to server!");
})