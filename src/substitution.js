const substitutionModule = (function () {
  const normalAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  function substitution(input, alphabet, encode = true) {
    //regex looking for duplicate characters in the alphabet
    const isDuplicate = !/(.).*\1/.test(alphabet);
    //check that alphabet exisits, has no duplicate characters, and is 26 characers long
    if (!alphabet || alphabet.length != 26 || !isDuplicate) return false;

    const inputAlphabet = Array.from(alphabet);
    const inputAsArray = input.toLowerCase().split("");
    const cipheredInputAsArray = [];

    for (let i = 0; i < inputAsArray.length; i++) {
      //finds the input/alphabet match
      const letterMatch = letter => letter === inputAsArray[i];
      //sets the input/alphabet index match as a variable
      const letterMatchIndex = encode ? normalAlphabet.findIndex(letterMatch) : inputAlphabet.findIndex(letterMatch);

      //findIndex() returns -1 for characters not in the alphabet array
      //if the character isn't in the alphabet array, return the original character
      if (letterMatchIndex === -1) {
          cipheredInputAsArray.push(input[i]);
      }
      else {
        //this is a bit inefficient; encode status is checked with every iteration and is also checked in letterMatchIndex
        //I wrote substitution.js before I wrote polybius.js and it would be cleaner, I think, if I had a separate encoder
        //     and decoder function like I did in polybius.js
        if (!encode) {
          cipheredInputAsArray.push(normalAlphabet[letterMatchIndex]);
        }
        else {
          cipheredInputAsArray.push(inputAlphabet[letterMatchIndex]);
        }
      }
    }
    return cipheredInputAsArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
