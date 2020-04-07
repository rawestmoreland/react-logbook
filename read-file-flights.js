const csv = require('csvtojson');
const axios = require('axios').default;

let acList = [];

csv({
	noheader: false,
	headers: [
		'date',
		'model',
		'aircraft_id',
		'route',
		'day_takeoffs',
		'night_takeoffs',
		'day_ldgs',
		'night_ldgs',
		'approaches',
		'single_engine',
		'multi_engine',
		'complex',
		'turbine',
		'rotocraft',
		'xc',
		'night',
		'imc',
		'sim_imc',
		'sim',
		'pic',
		'sic',
		'solo',
		'dual_recd',
		'dual_given',
		'total',
		'remarks',
	],
})
	.fromFile('Flights.csv')
	.then((data) => console.log(data));
