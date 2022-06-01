const polybiusModule = (function () {
  function ord(str) {return str.charCodeAt(0);}

  const alphabetPolybius = [["a","b","c","d","e",
                             "f","g","h","i","k",
                             "l","m","n","o","p",
                             "q","r","s","t","u",
                             "v","w","x","y","z"],
                            [11,21,31,41,51,
                             12,22,32,42,52,
                             13,23,33,43,53,
                             14,24,34,44,54,
                             15,25,35,45,55]];

  function polybius(input, encode = true) {
    //checks that input is an even amount of characters minus spaces when decoding
    if (!encode && input.replace(/\s/g, '').length % 2 != 0) {return false;}

    const result = [];

    function encoder () {
      const inputAsArray = input.toLowerCase().split("");
      for (let i = 0; i < inputAsArray.length; i++) {
        if (inputAsArray[i] === "j") {result.push(alphabetPolybius[1][8]);}
        if (inputAsArray[i] === " ") {result.push(" ");}
        for (let j = 0; j < 25; j++) {
          if (inputAsArray[i] === alphabetPolybius[0][j]) {result.push(alphabetPolybius[1][j]);}
        }
      }
      return result.join("");
    }

    function decoder () {
      //replace all spaces with 00 so that the length of the valid input remains even
      //could use .replaceAll(" ", "00"); but Qualified doesn't like it
      const replaceSpace = input.replace(/\s/g, '00');
      //divide the string into an array with 2 characters going to each index
      const inputAsArray = replaceSpace.match(/.{2}/g);
      for (let i = 0; i < inputAsArray.length; i++) {
        //catch for i and j sharing the value 42
        if (inputAsArray[i] === "42") {result.push("(i/j)");}
        //convert the placeholder 00 back into a space
        if (inputAsArray[i] === "00") {result.push(" ");}
        //regular case, iterates through alphabetPolybius to find the matching number/letter combo
        //probably could use find() here, but this was easier for me while I was writing
        for (let j = 0; j < 25; j++) {
          if (inputAsArray[i] == alphabetPolybius[1][j] && inputAsArray[i] !== "42") {result.push(alphabetPolybius[0][j]);}
        }
        
      }
      return result.join("");
    }

    if (!encode) {return decoder();}
    else {return encoder();}
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
