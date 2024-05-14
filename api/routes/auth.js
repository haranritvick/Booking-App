import express, { Router } from "express"

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello, this auth endpoint!!")
})

router.get("/register", (req,res) => {
    res.send("Hello, this auth register endpoint!!")
})

export default router