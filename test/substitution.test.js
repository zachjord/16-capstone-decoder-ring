const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  const alphabet = "qazwsxedcrfvtgbyhnujmikolp";
  describe("encoding", () => {
    it("The input could include special characters.", () => {
      const actual = substitutionModule.substitution("thinkful!", alphabet);
      const expected = "jdcgfxmv!";
      expect(actual).to.eql(expected);
    });
    it("Spaces should be maintained.", () => {
      const actual = substitutionModule.substitution("This is a test", alphabet);
      const expected = "jdcu cu q jsuj";
      expect(actual).to.eql(expected);
    });
    it("Capital letters can be ignored.", () => {
      const actual = substitutionModule.substitution("THINKFUL", alphabet);
      const expected = "jdcgfxmv";
      expect(actual).to.eql(expected);
    });
  });
  describe("decoding", () => {  
    it("The input could include special characters.", () => {
      const actual = substitutionModule.substitution("jdcgfxmv!", alphabet, false);
      const expected = "thinkful!";
      expect(actual).to.eql(expected);
    });
    it("Spaces should be maintained.", () => {
      const actual = substitutionModule.substitution("jdcu cu q jsuj", alphabet, false);
      const expected = "this is a test";
      expect(actual).to.eql(expected);
    });
    it("Capital letters can be ignored.", () => {
      const actual = substitutionModule.substitution("JDCGFXMV", alphabet, false);
      const expected = "thinkful";
      expect(actual).to.eql(expected);
    });
  });
  describe("alphabet", () => {
    it("Return false if there are duplicate characters in the alphabet.", () => {
      const actual = substitutionModule.substitution("", "qqzwsxedcrfvtgbyhnujmikolp");
      const expected = false;
      expect(actual).to.eql(expected);
    });
    it("Return false if the alphabet is not 26 characters.", () => {
      const actual = substitutionModule.substitution("", "abc");
      const expected = false;
      expect(actual).to.eql(expected);
    });
  });
});
