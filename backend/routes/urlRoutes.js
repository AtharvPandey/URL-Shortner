const express = require("express");
const {handleCreateShortID , handleRedirection ,handleGetvisitLog} = require("../controllers/url.js")
const router = express.Router();

router
    .post("/",handleCreateShortID)
    .get("/:id",handleRedirection)
    .get("/log/:id",handleGetvisitLog);

module.exports = router;