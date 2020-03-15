const csv = require('csvtojson')

csv()
    .fromFile('Aircraft.csv')
    .then(data => {
        console.log(data)
    })