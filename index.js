const express = require("express")
const path = require('path');
const app = express()
const port = 3000

// provide access to assets folder
app.use(express.static(__dirname + "/assets"));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "theming-kit.html"))
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
