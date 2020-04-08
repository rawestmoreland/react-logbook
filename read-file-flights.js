const csv = require('csvtojson');
const axios = require('axios').default;

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
	.then((data) => {
		let testFlight = [data[0]];
		console.log(testFlight);
		axios({
			url: 'http://localhost:5000/api/v1/flights/many',
			method: 'POST',
			data: testFlight,
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log('Error');
			});
	});
