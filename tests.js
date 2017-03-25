var expect = require('chai').expect
//var chaiAsPromised = require("chai-as-promised")
var dua = require('./lib.js')

//chai.use(chaiAsPromised)

describe("Blessing generator", function(){
    var testDua = new dua('fr')
    
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
    it("Check if translations work", function(){
        console.log(`Blessing ID ==> ${testDua.id}`)
        console.log(`Blessing ==> ${testDua.message}`)
        console.log(`Blessing language ===> ${testDua.language}`)
        testDua.translateBlessing().then(function(translation){
            expect(translation).to.be.a('string')
        })    
        
    })
})