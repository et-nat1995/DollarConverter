const api = require("express").Router();


api.post("/getChange", function (req, res) {
    console.log('calculating the coins!!');
    const originalValue = req.body.value;
    // there is no need to calculate the amount of dollars in the req.body added a check in front end to make sure value is only positive 
    // and only has two decimal places
    const dollars = originalValue.split('.')[0];
    // amount of cents from original value
    let cents = originalValue.split('.')[1]
    
    // all coin denominations that are checked
    const denominations = [50, 25, 10, 5, 1];
    // counter array for each denomination
    let counts = [0, 0, 0, 0, 0];

    for (let i = 0; i < denominations.length; i++) {
        counts[i] = Math.floor(cents / denominations[i])
        cents -= counts[i] * denominations[i]
    }

    res.send({
        orignal: originalValue, 
        coins: {
            dollar: dollars,
            halfDollar: counts[0],
            quarter: counts[1],
            dime: counts[2],
            nickel: counts[3],
            penny: counts[4]
        }
    });
});

api.get('/history', function(req, res) {
    console.log('Getting History');
    res.send({res : 'Getting History'});
})

module.exports = api;