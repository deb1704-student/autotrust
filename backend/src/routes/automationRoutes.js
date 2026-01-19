const express = require("express");
const router = express.Router();

const { runAutomation } = require("../controllers/automationController");
const auth = require("../middleware/authMiddleware"); // 👈 ADD THIS

router.post("/run", auth, runAutomation); // 👈 MODIFY THIS LINE

module.exports = router;
