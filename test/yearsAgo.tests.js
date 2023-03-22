describe("Years ago function", ()=>{
    it("Take in a year and return how many years ago is it from the current year", ()=>{
        assert.equal(yearsAgo(1962), new Date().getFullYear() - 1962)
    })
})