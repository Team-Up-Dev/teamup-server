const compression = require("compression");
const express = require("express");

const app = express();

const PORT = 7000 || process.env.PORT;
const api = require("./routes/api");

app.use(compression());

app.get("/", (req, res) => res.send('Go to <a href="/api">/api</a>'));
app.use("/api", api);

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT} | http://localhost:${PORT}`)
);
