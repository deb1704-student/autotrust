const audits = require("../models/Audit");
const hash = require("../utils/hash");

exports.runAutomation = (req, res) => {
  const lastLog = audits[audits.length - 1];

  const logData = {
    user: req.user.email,
    conditions: req.body.conditions,
    actions: req.body.actions,
    time: new Date().toISOString(),
    prevHash: lastLog ? lastLog.hash : "GENESIS"
  };

  const logHash = hash(logData);

  audits.push({
    ...logData,
    hash: logHash
  });

  res.json({
    status: "Automation executed",
    auditHash: logHash
  });
};
