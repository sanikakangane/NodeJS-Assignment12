const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoutes")

dotenv.config()

const app = express()

app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully")
    })
    .catch((error) => {
        console.log("MongoDB connection failed", error)
    })

app.get("/", (req, res) => {
    res.send("NodeJS Assignment 12 Server is running")
})

app.use("/", authRoutes)

const PORT = process.env.PORT || 1999

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`)
})