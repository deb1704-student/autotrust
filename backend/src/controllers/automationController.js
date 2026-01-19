const audits = require("../models/Audit");

exports.runAutomation = (req, res) => {
  audits.push({
    user: req.user.email,
    action: req.body.action,
    time: new Date()
  });

  res.json({ status: "Automation logged & executed" });
};
