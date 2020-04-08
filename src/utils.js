"use strict";

const fs = require("fs");
const neatCSV = require("neat-csv");

/**
 * @description Load content from `AgeGroupDetails.csv` file
 *
 * @returns Parsed CSV file content in the form of Array of JavaScript objects
 */
async function loadAgeGroupDetails() {
    const headers = ["Sno", "AgeGroup", "TotalCases", "Percentage"];

    // load data
    let data = await loadCSV("AgeGroupDetails", headers);

    // clean data
    data = data.slice(1);

    return data;
}

/**
 * @description Load content from `HospitalBedsIndia.csv` file
 *
 * @returns Parsed CSV file content in the form of Array of JavaScript objects
 */
async function loadHospitalBedsDetails() {
    const headers = [
        "Sno",
        "State/UT",
        "NumPrimaryHealthCenters_HMIS",
        "NumCommunityHealthCenters_HMIS",
        "NumSubDistrictHospitals_HMIS",
        "NumDistrictHospitals_HMIS",
        "TotalPublicHealthFacilities_HMIS",
        "NumPublicBeds_HMIS",
        "NumRuralHospitals_NHP18",
        "NumRuralBeds_NHP18",
        "NumUrbanHospitals_NHP18",
        "NumUrbanBeds_NHP18",
        "",
        "",
    ];

    // load data
    let data = await loadCSV("HospitalBedsIndia", headers);

    // clean data
    data = data.slice(1, data.length - 1);
    for (let i = 0; i < data.length; ++i) delete data[i][""];

    return data;
}

/**
 * @description Load content from `population_india_census2011.csv` file
 *
 * @returns Parsed CSV file content in the form of Array of JavaScript objects
 */
async function loadPopulationCensusDetails() {
    const headers = [
        "Sno",
        "State / Union Territory",
        "Population",
        "Rural population",
        "Urban population",
        "Area",
        "Density",
        "Gender Ratio",
    ];

    // load data
    let data = await loadCSV("population_india_census2011", headers);

    // clean data
    data = data.slice(1);

    return data;
}

/**
 *
 * @param {string} fileName
 * @param {Array<string>} headers
 *
 * @description Utility method to load raw data from the given CSV files
 *
 * @returns CSV file content in the form of Array of JavaScript objects
 */
async function loadCSV(fileName, headers) {
    const file = fs.readFileSync(`resources/${fileName}.csv`);
    return await neatCSV(file, { headers });
}

module.exports = {
    loadAgeGroupDetails,
    loadHospitalBedsDetails,
    loadPopulationCensusDetails,
};
