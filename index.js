require("dotenv").config()
const path = require("path")
const express = require("express")
const PORT = process.env.PORT || 5501
const app = express()
const { transporter } = require("./backend/nodemailer")
const { fetchDataFromContentful } = require("./backend/contentful")

// MIDDLEWARE
app.use(express.json())

app.post("/submit", async (req, res) => {
  const emailOptions = {
    from: '"new_email" new_email@zohomail.eu',
    to: "korchev94@gmail.com",
    subject: `New email from: ${req.body.email}, ${req.body.name}`,
    text: req.body.message,
  }
  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500)
    } else {
      console.log("Email sent: " + info.response)
      res.sendStatus(200)
    }
  })
})

app.post("/drawings", async (req, res) => {
  const data = await fetchDataFromContentful()
  res.send(data)
})

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
