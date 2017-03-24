var expect = require('chai').expect
var dua = require('./lib.js')

describe("Blessing generator", function(){
    it("generates a new blessing", function(){
        var testDua = new dua()
        console.log(`Blessing ID ==> ${testDua.id}`)
        console.log(`Blessing ==> ${testDua.message}`)

        expect(testDua.id).to.be.a('string')
        expect(testDua.message).to.be.a('string')
    })
})