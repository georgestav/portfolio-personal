require("dotenv").config(); // read env
// require("./database/connection.js"); // connect to db
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS Requests
const corsOptions = {
  origin: `https://${process.env.SERV_ADRS}:${process.env.PORT}`,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

//good practice to turn this off, avoids detection of apps running Express and then launch specifically-targeted attacks.
app.disable("x-powered-by");

// parse incoming requests with JSON payloads
app.use(express.json());
// parse incoming requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// *********  Routing  *********

// Handle GET requests to /api route
app.get("/api", require("./routes/apiRoutes.js"));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server listening on port ` + PORT);
});
