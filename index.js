require("dotenv").config()
const path = require("path")
const express = require("express")
const PORT = process.env.PORT || 5501
const app = express()
const { transporter } = require("./nodemailer")

// MIDDLEWARE
app.use(express.static(__dirname + "/build"))
app.use(express.json())

app.post("/submit", async (req, res) => {
  const emailOptions = {
    from: '"new_email" new_email@zohomail.eu',
    to: "korchev94@gmail.com",
    subject: `New email from: ${req.body.email}, ${req.body.name}`,
    text: req.body.message,
  }
  try {
    transporter.sendMail(emailOptions, function (error, info) {
      if (error) {
        res.sendStatus(500)
      } else {
        console.log("Email sent: " + info.response)
        res.sendStatus(200)
      }
    })
  } catch (err) {
    console.log(err.message)
  }
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
