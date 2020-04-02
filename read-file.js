const csv = require('csvtojson');
const axios = require('axios').default;

// csv({
// 	noheader: false,
// 	headers: [
// 		'ident',
// 		'ac_or_sim',
// 		'model',
// 		'icao_code',
// 		'category',
// 		'engines',
// 		'engine_type',
// 		'land_or_sea',
// 		'manufacturer',
// 		'hi_perf',
// 		'efis',
// 		'ifr_equipped',
// 		'weight_class',
// 		'equipment'
// 	]
// })
// 	.fromFile('Aircraft.csv')
// 	.then(data => {
// 		console.log(data);
// 	});

axios
	.get('http://localhost:5000/api/v1/aircraft/hello')
	.then(data => console.log(data.data.message));
