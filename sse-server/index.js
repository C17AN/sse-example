const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 5500;

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

app.get("/alarm", (req, res) => {
    res.setHeader("Content-Type", 'text/event-stream');
    res.setHeader("Cache-Control", 'no-cache');
    res.setHeader("Connection", 'keep-alive');

    const intervalId = setInterval(() => {
        const date = new Date();
        const data = `data: ${date.toISOString()}\n\n`;
        res.write(data);
        // res.flush();
    }, 1000);

    // Clear interval on client disconnect
    req.on('close', () => {
        clearInterval(intervalId);
    });
})

app.get("/friends", (req, res) => {
    res.send({data: 'result'})
})


app.get("/result", (req, res) => {
    res.send({data: 'result'})
})

app.get("/", (req, res) => {
    res.send('Hello, world!')
})