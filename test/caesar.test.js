// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar test", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", ()=>{
      const actual = false;
      const expected = caesar.caesar('fdfgfgryfjr', 0);
      expect(actual).to.eql(expected);
    });
    it("should return false if the shift amount is above 25", ()=>{
      expect(false).to.eql(caesar.caesar('dhsfkuhfi', 26))
    });
    it("should return false if the shift amount is less than -25", ()=>{
      expect(false).to.eql(caesar.caesar('hfushfusf', -26))
    });
  });
  describe("encoding a message", ()=>{
    it("should encode a message by shifting the letters", ()=>{
      expect('cdefghi').to.eql(caesar.caesar('abcdefg', 2))
    });
    it("should leaves spaces and other symbols as is", ()=>{
      expect('cde fg-hi').to.eql(caesar.caesar('abc de-fg', 2))
    });
    it("should ignore capital letters", ()=>{
      expect('cdefghi').to.eql(caesar.caesar('abCdefg', 2))
    });
    it("should appropriately handle letters at the end of the alphabet", ()=>{
      expect('cdefghb').to.eql(caesar.caesar('abcdefz', 2))
    });
    it("should allow for a negative shift that will shift to the left", ()=>{
      expect('stuvwx').to.eql(caesar.caesar('uvwxyz', -2))
    });
  });
  describe("decoding a message", ()=>{
    it("should decode a message by shifting the letters in the opposite direction", ()=>{
      expect('abcdefg').to.eql(caesar.caesar('cdefghi', 2, false))
    });
    it("should leaves spaces and other symbols as is", ()=>{
      expect('abc de-fg').to.eql(caesar.caesar('cde fg-hi', 2, false))
    });
    it("should ignore capital letters", ()=>{
      expect('abcdefg').to.eql(caesar.caesar('cdEfghi', 2, false))
    });
    it("should appropriately handle letters at the end of the alphabet", ()=>{
      expect('abcdefz').to.eql(caesar.caesar('cdefghb', 2, false))
    });
    it("should allow for a negative shift that will shift to the left", ()=>{
      expect('uvwxyz').to.eql(caesar.caesar('stuvwx', -2, false))
    });

  });

});
