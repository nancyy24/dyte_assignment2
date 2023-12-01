const express = require("express")
const router = express.Router()

const all_logs = require("../Controllers/logsController")

router.get("/api/all_logs",all_logs.get_all_logs_data);

router.post("/api/filter",all_logs.filterData);

module.exports = router 