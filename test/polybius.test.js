const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
  describe("encoding", () => {
    it("Output should be a string.", () => {
      const actual = typeof polybiusModule.polybius("thinkful"); 
      const expected = "string";
      expect(actual).to.eql(expected);
    });
    it("i and j are both encoded to 42.", () => {
      const actual = polybiusModule.polybius("ijiji"); 
      const expected = "4242424242";
      expect(actual).to.eql(expected);
    });
    it("Spaces should be maintained when encoding.", () => {
      const actual = polybiusModule.polybius("this is a test"); 
      const expected = "44324234 4234 11 44513444";
      expect(actual).to.eql(expected);
    });
    it("Capital letters can be ignored when encoding.", () => {
      const actual = polybiusModule.polybius("THIS IS A TEST"); 
      const expected = "44324234 4234 11 44513444";
      expect(actual).to.eql(expected);
    });
  });
  describe("decoding", () => {
    it("Output should be a string.", () => {
      const actual = typeof polybiusModule.polybius("4432423352125413", false); 
      const expected = "string";
      expect(actual).to.eql(expected);
    });
    it("42 should be decoded to (i/j)", () => {
      const actual = polybiusModule.polybius("4432423352125413", false); 
      const expected = "th(i/j)nkful";
      expect(actual).to.eql(expected);
    });
    it("Return false if the number of characters in the input excluding spaces is odd.", () => {
      const actual = polybiusModule.polybius("12 3", false); 
      const expected = false;
      expect(actual).to.eql(expected);
    });
    it("Spaces should be maintained when decoding.", () => {
      const actual = polybiusModule.polybius("44324234 4234 11 44513444", false); 
      const expected = "th(i/j)s (i/j)s a test";
      expect(actual).to.eql(expected);
    });
  });
});
