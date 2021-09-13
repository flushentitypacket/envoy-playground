const express = require('express')
const app = express()

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));


// reply to request with "Hello World!"
app.get('/', async (req, res) => {
    console.log("Received")
    await snooze(10000)
    res.send('Hello World!')
    console.log("Responded")
})

// start a server on port 8080
const server = app.listen(8080, () => {
    const port = server.address().port
    console.log('Example app listening on port', port)
})
