const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AutoTrust Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

const automationRoutes = require("./src/routes/automationRoutes");
app.use("/api/automation", automationRoutes);

const auditRoutes = require("./src/routes/auditRoutes");
app.use("/api/audit", auditRoutes);
