"use strict";

const { assert, expect } = require("chai");

const utils = require("../src/utils");

describe("utils.loadAgeGroupDetails()", () => {
    it("should not throw an error", async () => {
        try {
            await utils.loadAgeGroupDetails();
        } catch (error) {
            console.log(error);
            expect(true).to.be.false;
        }
        expect(true).to.be.true;
    });

    it("should not be null", async () => {
        assert.isNotNull(await utils.loadAgeGroupDetails());
    });
});

describe("utils.loadHospitalBedsDetails()", () => {
    it("should not throw an error", async () => {
        try {
            await utils.loadHospitalBedsDetails();
        } catch (error) {
            console.log(error);
            expect(true).to.be.false;
        }
        expect(true).to.be.true;
    });

    it("should not be null", async () => {
        assert.isNotNull(await utils.loadHospitalBedsDetails());
    });
});

describe("utils.loadPopulationCensusDetails()", () => {
    it("should not throw an error", async () => {
        try {
            await utils.loadPopulationCensusDetails();
        } catch (error) {
            console.log(error);
            expect(true).to.be.false;
        }
        expect(true).to.be.true;
    });

    it("should not be null", async () => {
        assert.isNotNull(await utils.loadPopulationCensusDetails());
    });
});
