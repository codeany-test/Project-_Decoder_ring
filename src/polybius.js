// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i/j': '42', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
   if (encode){
     return input
    .match(/[0-9]{2}|[a-z]|\s/g)
    .map(character => encoder[character] || character)
    .join('');
   }  else {
     let len = input;
     len= len.replace(' ', '');
     return (!((len.length)%2)) ? (input
    .match(/[0-9]{2}|[a-z]|\s/g)
    .map(character => getKeyByValue(encoder, character) || character)
    .join('') ) : false;
   }
  }
  function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
