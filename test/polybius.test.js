// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius test", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", ()=>{
      expect('112131415112').to.eql(polybius.polybius('abcdef'))
    });
    it("should translate both 'i' and 'j' to 42", ()=>{
      expect('112131414242').to.eql(polybius.polybius('abcdij'))
    });
    it("should leave spaces as is", ()=>{
      expect('112131 415112').to.eql(polybius.polybius('abc def'))
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", ()=>{
      expect('helloworld').to.eql(polybius.polybius('32511313432543241341', false))
    });
    it("should translate both 'i' and 'j' to 42", ()=>{
      expect('thi/jnkful').to.eql(polybius.polybius("4432423352125413", false))
    });
    it("should leave spaces as is", ()=>{
     expect('hello world').to.eql(polybius.polybius('3251131343 2543241341', false))
    });
    it("should return false if the length of all numbers is odd", ()=>{
     expect(false).to.eql(polybius.polybius("44324233521254134", false))
    });
  });
});