const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  describe("encoding", () => {
    it("Spaces and non-alphabetic characters should be maintained.", () => {
      const actual = caesarModule.caesar("This is a test.", 3);
      const expected = "wklv lv d whvw."; 
      expect(actual).to.eql(expected);
    });
    it("Captical letters can be ignored.", () => {
      const actual = caesarModule.caesar("THIS IS A TEST", 3);
      const expected = "wklv lv d whvw"; 
      expect(actual).to.eql(expected);
    });
    it("Characters that go past 'z' should wrap around.", () => {
       const actual = caesarModule.caesar("The Legend of Zelda", 3);
       const expected = "wkh ohjhqg ri chogd"; 
       expect(actual).to.eql(expected);
    });
  });
  describe("decoding", () => {
    it("Spaces and non-alphabetic characters should be maintained.", () => {
      const actual = caesarModule.caesar("wklv lv d whvw.", 3, false);
      const expected = "this is a test."; 
      expect(actual).to.eql(expected);
    });
    it("Captical letters can be ignored.", () => {
      const actual = caesarModule.caesar("WKLV LV D WHVW", 3, false);
      const expected = "this is a test"; 
      expect(actual).to.eql(expected);
    });
    it("Characters that go past 'a' should wrap around.", () => {
       const actual = caesarModule.caesar("An apple a day keeps the doctor away", 3);
       const expected = "dq dssoh d gdb nhhsv wkh grfwru dzdb"; 
       expect(actual).to.eql(expected);
    });
  });
  describe("shift", () => {
    it("Return flase if shift value isn't present.", () => {
      const actual = caesarModule.caesar("This is a test.");
      const expected = false; 
      expect(actual).to.eql(expected);
    });
    it("Return flase if shift value = 0.", () => {
      const actual = caesarModule.caesar("This is a test.", 0);
      const expected = false; 
      expect(actual).to.eql(expected);
    });
    it("Return flase if shift value is < -25.", () => {
      const actual = caesarModule.caesar("This is a test.", -26);
      const expected = false; 
      expect(actual).to.eql(expected);
    });
    it("Return flase if shift value is > 25.", () => {
      const actual = caesarModule.caesar("This is a test.", 26);
      const expected = false; 
      expect(actual).to.eql(expected);
    });
  });
});
