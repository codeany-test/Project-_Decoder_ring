// Write your tests here!
const substitution1 = require("../src/substitution");
const substitution = substitution1.substitution
const expect = require("chai").expect;

describe("substitution test", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", ()=>{
      expect(false).to.eql(substitution('thinkful'))
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", ()=>{
      expect(false).to.eql(substitution('thinkful', 'abcdefghijklmnopqrstuvwxy'))
    });
    it("should return false if the substitution alphabet does not contain unique characters", ()=>{
      expect(false).to.eql(substitution('abcabcdguejhfhgiherghv'))
    });
  });
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", ()=>{
      expect('jrufscpw').to.eql(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"));
    });
    it("should work with any kind of key with unique characters", ()=>{
      expect('y&ii$r&').to.eql(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"));
    });
    it("should preserve spaces", ()=>{
      expect('elp xhm xf mbymwwmfj dne').to.eql(substitution('you are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev'));
    });
  });
    describe('decoding a message', () => {
    it("should decode a message by using the given substitution alphabet", ()=>{
      expect('thinkful').to.eql(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false));
    });
    it("should work with any kind of key with unique characters", ()=>{
      expect('message').to.eql(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false));
    });
    it("should preserve spaces", ()=>{
      expect('thi nkful').to.eql(substitution("jru fscpw", "xoyqmcgrukswaflnthdjpzibev", false));
    });
  });
});