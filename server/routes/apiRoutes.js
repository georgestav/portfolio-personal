const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// Handle GET requests to /api route
router.get("/api", (req, res) => {
  res.json({ msg: "Server up!", status: "In development" });
});

module.exports = router;
