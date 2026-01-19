const express = require("express");
const router = express.Router();
const audits = require("../models/Audit");

router.get("/", (req, res) => res.json(audits));
module.exports = router;
