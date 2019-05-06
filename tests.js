var expect = require('chai').expect
//var chaiAsPromised = require("chai-as-promised")
var dua = require('./index.js')

//chai.use(chaiAsPromised)

describe("Blessing generator", function(){
    var testDua = new dua()
    
    it("Generate a new blessing", function(){
        console.log(`Blessing ID ==> ${testDua.id}`)
        console.log(`Blessing ==> ${testDua.message}`)

        expect(testDua.id).to.be.a('string')
        expect(testDua.message).to.be.a('string')
    })
    it("Check if one's code is blessed", function(){
        console.log(`Blessing ID ==> ${testDua.id}`)
        console.log(`Blessing ==> ${testDua.message}`)
        console.log(`Blessing status ===> ${testDua.isCodeBlessed()}`)

        expect(testDua.isCodeBlessed()).equals(true)
    })  
})