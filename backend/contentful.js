const contentful = require("contentful")
const SPACE = process.env.SPACE
const TOKEN = process.env.TOKEN
const ENTRY = process.env.ENTRY

const contentfulClient = contentful.createClient({
  space: SPACE,
  accessToken: TOKEN,
})

const fetchDataFromContentful = async () => {
  const data = await contentfulClient.getEntry(ENTRY)
  const drawing = data.fields.drawing
  const allDrawingsURL = drawing.map((el) => el.fields.file.url)
  return allDrawingsURL
}

module.exports = { fetchDataFromContentful }
