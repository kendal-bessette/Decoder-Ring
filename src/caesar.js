const caesarModule = (function () {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    let result = "";
    //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (!shift || shift < -25 || shift > 25) return false;
    //if we are decoding, multiply the shift by -1. default value for encoding is true
    if (!encode) shift *= -1;
    //go through each letter of the input
    //adjust each letter based on the value of the shift
    //return the adjusted letter to the result variable
    for (let i = 0; i < input.length; i++) {
      let letter = input[i].toLowerCase();
      if (alpha.includes(letter)) {
        //determine the index of the letter
        let letterIndex = alpha.indexOf(letter);
        //add the shift value to the index
        let shiftIndex = shift + letterIndex;
        // send index back to the front of the alphabet
        console.log(shiftIndex);
        if (shiftIndex > 25) {
          shiftIndex -= 26;
        } else if (shiftIndex < 0) {
          shiftIndex += 26;
        }
        let shiftedLetter = alpha[shiftIndex];
        console.log(shiftedLetter, shiftIndex);
        result += shiftedLetter;
      } else {
        result += letter;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
