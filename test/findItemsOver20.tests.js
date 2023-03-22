describe("Find items over 20 function", ()=>{
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];

    it("Takes in a list of objects each object having name and qty attributes, return the products with a qty higher than 20", ()=>{
        assert.deepEqual(findItemsOver20(itemList), results)
    })
})