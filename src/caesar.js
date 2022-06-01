const caesarModule = (function () {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  function caesar(input, shift, encode = true) {
    //if we are decoding than we want the shift to move in reverse
    if (!encode) { shift = shift * -1; }

    //catch for invalid shift values
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const inputAsArray = input.toLowerCase().split("");
    const cipheredInputAsArray = [];

    for (let i = 0; i < inputAsArray.length; i++) {
      //finds the input/alphabet match
      const letterMatch = letter => letter === inputAsArray[i];
      //sets the input/alphabet index match as a variable
      const letterMatchIndex = alphabet.findIndex(letterMatch);
      const shiftedIndex = letterMatchIndex + shift;

      //findIndex() returns -1 for characters not in the alphabet array
      //if the character isn't in the alphabet array, return the original character
      if (letterMatchIndex === -1) {
          cipheredInputAsArray.push(input[i]);
      }
      //for wrapping past the alphabet
      else if (shiftedIndex > 25) {
        cipheredInputAsArray.push(alphabet[shiftedIndex - 26]);
      }
      //for reverse wrapping the alphabet
      else if (shiftedIndex < 0) {
        cipheredInputAsArray.push(alphabet[shiftedIndex + 26]);
      }
      //normal case, pushes the letter shifted to cipheredInputAsArray
      else {
        cipheredInputAsArray.push(alphabet[shiftedIndex]);
      }
    }
    return cipheredInputAsArray.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
