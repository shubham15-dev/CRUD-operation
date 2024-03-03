const express = require("express")
const app = express();
const CandidateModel = require("./schema/candidateSchema")
require("./db/connection")
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = process.env.port || 5000;

app.get("/", async (req, res) => {
    res.send("welcome to express")
})
//==============================================================================
app.post("/register", async (req, res) => {
    const data = new CandidateModel(req.body)
    const insert = await data.save();
    try {
        res.status(200).send({ msg: "Registration successfully", insert })
    } catch (error) {
        res.status(500).send({ msg: "Refistration Failed ", error })
    }
})
//==============================================================================
app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const data = await CandidateModel.findOne({ email, password })
    try {
        if (!data) {
            console.log("invalid ")
        }
        else {
            res.status(200).send({ msg: "login successfully", data })
        }
    } catch (error) {
        res.status(500).send({ msg: "login Failed ", error })
    }
})
//===========================================================================
app.patch("/update/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const data = await CandidateModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).send({ msg: "update successfully", Data :data })
    } catch (error) {
        res.status(500).send({ msg: "failed", error })
    }
})
//=========================================================================

app.get("/users", async (req, res) => {
    try {
        const data = await CandidateModel.find({})
        res.status(200).send({ msg: "get data successfully", Data:data })
    } catch (error) {
        res.status(500).send({ msg: "failed", error })
    }
})
//=========================================================================
app.get("/oneuser/:id", async (req, res) => {
    try {
        const data = await CandidateModel.findOne({_id:req.params.id})
        res.status(200).send({ msg: "get data successfully", Data:data })
    } catch (error) {
        res.status(500).send({ msg: "failed", error })
    }
})
//=========================================================================
app.delete("/delete/:id", async (req, res) => {
    try {
        const data = await CandidateModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).send({ msg: " data deleted", data })
    } catch (error) {
        res.status(500).send({ msg: "failed", error })
    }
})




app.listen(port, () => {
    console.log(`connection is done at http://localhost/${port}`)
})