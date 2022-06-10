// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || (alphabet.length!== 26) || !isUnique(alphabet)) {
      return false;
    }
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const encoder = Object.fromEntries(alpha.split('').map((current, index)=> {
  return [current, alphabet[index]]
}))

   if (encode){
     return input
    .split('')
    .map(character => encoder[character] || character)
    .join('');
   }  else {
     let len = input;
     return input
    .split('')
    .map(character => getKeyByValue(encoder, character) || character)
    .join('');
   }

  }
  function isUnique(str) {
  return new Set(str).size == str.length;
}
    function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
