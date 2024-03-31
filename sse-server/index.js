const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5500;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.get("/friend/request", () => {
  res.send("haha");
});

app.get("/friend/check-request", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendEvent = () => {
    const date = new Date();
    res.write(`data: ${JSON.stringify(date.toISOString())}\n\n`);
  };

  sendEvent();

  const intervalId = setInterval(sendEvent, 3000);

  req.on("close", () => {
    clearInterval(intervalId);
    console.log("Client disconnected");
  });
});

app.get("/friends", (req, res) => {
  res.send({ data: "result" });
});

app.get("/result", (req, res) => {
  res.send({ data: "result" });
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
