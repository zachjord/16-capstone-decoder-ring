const substitutionModule = (function () {
  const normalAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  function substitution(input, alphabet, encode = true) {

    const isDuplicate = !/(.).*\1/.test(alphabet);
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
