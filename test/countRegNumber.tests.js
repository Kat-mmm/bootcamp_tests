describe("Count registration numbers function", ()=>{
    it("Count the registration numbers in a string and return the count", ()=>{
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3)

        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 555328')
        assert.equal(regCount, 4)
    })
})