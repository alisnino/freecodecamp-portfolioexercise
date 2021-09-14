const express = require("express")
const path = require('path')
const app = express()

// provide access to assets folder
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/images"));
app.set('port', process.env.WEBAPP_PORT || 3000);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/template", (req, res) => {
    res.sendFile(path.join(__dirname, "theming-kit.html"))
})

app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`)
})
