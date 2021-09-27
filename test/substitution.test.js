// Write your tests here!
const {substitution} = require('../src/substitution.js')
const expect = require('chai').expect

describe("Substitution Cipher", () => {

    it('(thinkful, xoyqmcgrukswaflnthdjpzibev) should equal: jrufscpw', () => {
            let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            let expected = "jrufscpw"
            expect(actual).to.equal(expected)  
     }); 

    it('(You are an excellent spy, xoyqmcgrukswaflnthdjpzibev) should equal: elp xhm xf mbymwwmfj dne', () => {
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)  
    }); 

    it('(jrufscpw, xoyqmcgrukswaflnthdjpzibev, false) should equal: thinkful', () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        let expected = "thinkful"
        expect(actual).to.equal(expected)  
    }); 

    it('(message, zrdxtfcygvuhbijnokmpl) should equal: y&ii$r&', () => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        let expected = "y&ii$r&"
        expect(actual).to.equal(expected)  
    }); 

    it('(y&ii$r&, zrdxtfcygvuhbijnokmpl, false) should equal: message', () => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.equal(expected)  
    }); 

    it('(thinkful, short) should equal: false', () => {
        let actual = substitution("thinkful", "short")
        let expected = false
        expect(actual).to.equal(expected)  
    }); 

    it('(thinkful, abcabcabcabcabcabcabcabcyz) should equal: false', () => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        let expected = false
        expect(actual).to.equal(expected)  
    }); 

    it('(message, plmoknijbuhvygctfxrdzeswaq) should equal: ykrrpik', () => {
        let actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
        let expected = "ykrrpik"
        expect(actual).to.equal(expected)  
    }); 
    });