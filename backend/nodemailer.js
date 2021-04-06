require("dotenv").config()
const nodemailer = require("nodemailer")
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
})

module.exports = { transporter }
