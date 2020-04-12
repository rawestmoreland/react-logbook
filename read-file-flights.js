const csv = require('csvtojson');
const axios = require('axios').default;

let flightList = [];

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
		for (let i = 0; i < data.length; i++) {
			data[i].day_takeoffs = parseInt(data[i].day_takeoffs) || 0;
			data[i].night_takeoffs = parseInt(data[i].night_takeoffs) || 0;
			data[i].day_ldgs = parseInt(data[i].day_ldgs) || 0;
			data[i].night_ldgs = parseInt(data[i].night_ldgs) || 0;
			data[i].approaches = parseInt(data[i].approaches) || 0;
			data[i].single_engine = parseFloat(data[i].single_engine) || 0.0;
			data[i].multi_engine = parseFloat(data[i].multi_engine) || 0.0;
			data[i].complex = parseFloat(data[i].complex) || 0.0;
			data[i].turbine = parseFloat(data[i].turbine) || 0.0;
			data[i].rotocraft = parseFloat(data[i].rotocraft) || 0.0;
			data[i].xc = parseFloat(data[i].xc) || 0.0;
			data[i].night = parseFloat(data[i].night) || 0.0;
			data[i].imc = parseFloat(data[i].imc) || 0.0;
			data[i].sim = parseFloat(data[i].sim) || 0.0;
			data[i].pic = parseFloat(data[i].pic) || 0.0;
			data[i].sic = parseFloat(data[i].sic) || 0.0;
			data[i].solo = parseFloat(data[i].solo) || 0.0;
			data[i].dual_recd = parseFloat(data[i].dual_recd) || 0.0;
			data[i].dual_given = parseFloat(data[i].dual_given) || 0.0;
			data[i].total = parseFloat(data[i].total) || 0.0;
		}
		axios({
			url: 'http://localhost:5000/api/v1/flights/many',
			method: 'POST',
			data: data,
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log('Error');
			});
	});
