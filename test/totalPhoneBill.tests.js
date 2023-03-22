describe("Total phone bill function", ()=>{
    it("Take in a string of calls made and sms's made then return the total phone bill", ()=>{
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("Take in a string of calls made and sms's made then return the total phone bill", ()=>{
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })

    it("Take in a string of calls made and sms's made then return the total phone bill", ()=>{
        assert.equal('R0.65', totalPhoneBill('sms'));
    })
})