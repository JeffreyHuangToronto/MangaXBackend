// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/routes");

const cors = require("cors");
app.use(
  cors({
    origin: "https://frabjous-froyo-8a5b2b.netlify.app/",
  })
);

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
