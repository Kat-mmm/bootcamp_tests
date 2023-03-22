describe("All from town function", ()=>{
    it("Take in a string of registration numbers and return an array of strings with reg numbers for the town", ()=>{
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
    })

    it("Take in a string of registration numbers and return an array of strings with reg numbers for the town", ()=>{
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.deepEqual(fromKuilsriver, []);
    })
})