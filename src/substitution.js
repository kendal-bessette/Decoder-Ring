const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  if(!alphabet) return false 
  if(alphabet.length !== 26) return false 
  // convert the string to an array and check for duplicates 
  if(Array.from(new Set(alphabet)).length !== 26) return false 
  // set up empty variables to hold values 
  let encodeObj = {};
  let decodeObj = {}; 
  let result = ""; 
  // split the alphabet string 
    alphabet = alphabet.split(""); 
  // convert the input value to lowercase
    input = input.toLowerCase(); 
    alpha.split("").forEach((letter, index) => {
  //loop through the alpha string and match the letter with the index
      encodeObj[letter] = alphabet[index]
  // reverse the process to decode 
      decodeObj[alphabet[index]] = letter 
    }); 
    if(!encode) encodeObj = decodeObj 
  //if we need to decode, assign the encode object the value of the decode object 
    input.split("").forEach(input => {
      result += input === " " ? " " : encodeObj[input]
    })
    console.log(result); 
    return result; 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
