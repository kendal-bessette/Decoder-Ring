// Write your tests here!
const {polybius} = require('../src/polybius.js')
const expect = require('chai').expect

describe("Polybius Square", () => {

it('(thinkful) should equal: 4432423352125413 ', () => {
        let actual = polybius("thinkful")
        let expected = "4432423352125413"  
        expect(actual).to.equal(expected)  
 }); 

 it('(Hello World) should equal: 3251131343 2543241341 ', () => {
    let actual = polybius("Hello World")
    let expected = "3251131343 2543241341"
    expect(actual).to.equal(expected)  
});

it('(3251131343 2543241341, false) should equal: hello world', () => {
    let actual = polybius("3251131343 2543241341", false)
    let expected = "hello world"
    expect(actual).to.equal(expected)  
});

it('(4432423352125413, false) should equal: th(i/j)nkful', () => {
    let actual = polybius("4432423352125413", false)
    let expected = "th(i/j)nkful"
    expect(actual).to.equal(expected)  
});

it('(44324233521254134, false) should equal: false', () => {
    let actual = polybius("44324233521254134", false)
    let expected = false 
    expect(actual).to.equal(expected)  
});

it('(message) should equal: 23513434112251', () => {
    let actual = polybius("message")
    let expected = "23513434112251" 
    expect(actual).to.equal(expected)  
});

}); 