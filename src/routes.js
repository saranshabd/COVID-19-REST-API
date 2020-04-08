"use strict";

const { Router } = require("express");
const httpStatus = require("http-status-codes");

const utils = require("./utils");

const router = Router();

router.get("/age-group", async (_, res) => {
    const data = await utils.loadAgeGroupDetails();
    res.status(httpStatus.OK).json(data);
});

router.get("/hospital-beds", async (_, res) => {
    const data = await utils.loadHospitalBedsDetails();
    res.status(httpStatus.OK).json(data);
});

router.get("/population-census", async (_, res) => {
    const data = await utils.loadPopulationCensusDetails();
    res.status(httpStatus.OK).json(data);
});

module.exports = router;
