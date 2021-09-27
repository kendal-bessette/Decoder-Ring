// Write your tests here!
const {caesar} = require('../src/caesar.js')
const expect = require('chai').expect

describe("Caesar Shift", () => {
    it ('(thinkful, 3) should equal: wklqnixo', () => {
    let actual = caesar("thinkful", 3)
    let expected = "wklqnixo"  
    expect(actual).to.equal(expected)  
})

it ("(thinkful, -3) should equal: qefkhcri", () => {
    let actual = caesar("thinkful", -3)
    let expected = "qefkhcri"
    expect(actual).to.equal(expected)
})

it ("(wklqnixo, 3, false) should equal: thinkful", () => {
    let actual = caesar("wklqnixo", 3, false)
    let expected = "thinkful"
    expect(actual).to.equal(expected)
})

it("(This is a secret message!, 8) should equal: bpqa qa i amkzmb umaaiom!", () => {
    let actual = caesar("This is a secret message!", 8)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.equal(expected)
})

it("(BPQA qa I amkzmb umaaiom!, 8, false) should equal: this is a secret message!", () => {
    let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    let expected = 'this is a secret message!'
    expect(actual).to.equal(expected)
})

it("(thinkful) should equal: false", () => {
    let actual = caesar("thinkful")
    let expected = false
    expect(actual).to.equal(expected)
})

it("(thinkful, 99) should equal: false", () => {
    let actual = caesar("thinkful", 99)
    let expected = false
    expect(actual).to.equal(expected)
})

it("(thinkful, -26) should equal: false", () => {
    let actual = caesar("thinkful", -26)
    let expected = false
    expect(actual).to.equal(expected)
})

it("(Zebra Magazine, 3) should equal: cheud pdjdclqh", () => {
    let actual = caesar("Zebra Magazine", 3)
    let expected = "cheud pdjdclqh"
    expect(actual).to.equal(expected)
})

}); 