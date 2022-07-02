const express = require("express")
const { copyFileSync } = require("fs")
const app = express()
const PORT = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", "ejs")

let lan = []

app.get("/", (req, res) => {
  res.render("index", { plNames: lan })
})
app.get("/contact", (req, res) => {
  res.render("contact", {})
})
app.post("/", (req, res) => {
  const lang = req.body.language
  lan.push(lang.toUpperCase())
  //   console.log(lang.toUpperCase())
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`)
})
