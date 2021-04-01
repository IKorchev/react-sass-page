require("dotenv").config()
const path = require("path")
const express = require("express")
const PORT = process.env.PORT || 5500
const ADMIN_PASS = process.env.ADMIN_PASSWORD
const PASSWORD = process.env.MONGO_PASSWORD
const app = express()
const mongoose = require("mongoose")
const { Schema } = mongoose

mongoose.connect(
  `mongodb+srv://korchev:${PASSWORD}@cluster0.wf0u5.mongodb.net/images?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const imageSchema = new Schema({
  title: { type: String, minLength: 3, maxLength: 15, required: true },
  url: { type: String, minLength: 5, required: true },
})

const Image = mongoose.model("Image", imageSchema)
const db = mongoose.connection
db.on("error", () => console.log("there was an error"))
db.once("connected", () => console.log("mongoose connection established"))
// MIDDLEWARE

app.use(express.static(__dirname + "/build"))
app.use(express.json())

app.post("/submit/:password", async (req, res) => {
  if (req.params.password === ADMIN_PASS) {
    console.log(req.body)
    try {
      await Image.create({
        title: req.body.title,
        url: req.body.url,
      })
      res.sendStatus(200)
    } catch (err) {
      console.log(err.message)
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(404)
  }
})

app.get("/images", async (req, res) => {
  Image.find({}, (err, doc) => {
    console.log(doc)
    res.send(doc)
  })
})

app.delete("/delete/:url", async (req, res) => {
  try {
    const data = await Image.deleteOne({ url: req.params.url })
    if (data.deletedCount > 0) {
      res.sendStatus(200)
      console.log("item deleted")
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    console.log(err.message)
    res.sendStatus(500)
  }
})

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
