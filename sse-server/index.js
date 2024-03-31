const express = require("express");
const cors = require("cors");
const app = express();
const events = require("events");
const eventEmitter = new events.EventEmitter();
const PORT = 5500;

app.use(cors());
app.use(express.json({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.post("/friend/request", (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  eventEmitter.emit("newFriendRequest", {
    friendName: req.body.friendName,
  });
  res.send("친구 요청이 전송되었습니다.");
});

app.get("/friend/check-request", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendEvent = (e) => {
    res.write(`data: ${JSON.stringify({ friendName: e.friendName })}\n\n`);
  };

  eventEmitter.on("newFriendRequest", sendEvent);
});

app.get("/", (req, res) => {
  res.send("SSE 예제를 위한 서버입니다.");
});
