const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
   //organize the data in a way that's easy to access 
   let alphabet = {
   a: "11", b: "21", c: "31", d: "41", e: "51", 
   f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
   l: "13", m: "23", n: "33", o: "43", p: "53",
   q: "14", r: "24", s: "34", t: "44", u: "54", 
   v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "
   }; 
   // reverse the data to access it by the number value 
   let decodedAlpha = {
   11: "a", 12: "f", 13: "l", 14: "q", 15: "v",
   21: "b", 22: "g", 23: "m", 24: "r", 25: "w", 
   31: "c", 32: "h", 33: "n", 34: "s", 35: "x", 
   41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y", 
   51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " "
   }; 
// if we're encoding, we'll use the alphabet dataset 
  if(encode) {
//return the value into the map and join without a space 
    return input.split('').map(letter => {
      return alphabet[letter.toLowerCase()]
    })
    .join('')
// "else" is used to decode 
  } else {
//remove spaces from the input 
//if the length is not even, return false 
//check to make sure there are an even number of characters 
    if(input.replace(/\s/g,'').length %2 !== 0 ) return false 
      return input.match(/[0-9]{2}|\s/g).map(number => {
  // take the number from above and return into the decode 
        return decodedAlpha[number]
      }).join('')
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
