const csv = require('csvtojson');
const axios = require('axios').default;

let acList = [];

csv({
	noheader: false,
	headers: [
		'ident',
		'ac_or_sim',
		'model',
		'icao_code',
		'category',
		'engines',
		'engine_type',
		'land_or_sea',
		'manufacturer',
		'hi_perf',
		'efis',
		'ifr_equipped',
		'weight_class',
		'equipment'
	]
})
	.fromFile('Aircraft.csv')
	.then(data => {
		data.forEach(data => {
			let newAircraft = {
				ident: data.ident,
				ac_or_sim: data.ac_or_sim,
				model: data.model,
				icao_code: data.icao_code,
				category: data.category,
				engines: data.engines,
				engine_type: data.engine_type,
				land_or_sea: data.land_or_sea,
				manufacturer: data.manufacturer,
				model_year: data.model_year,
				weight_class: data.weight_class,
				equipment: data.equipment,
				hi_perf: data.hi_perf === 'true',
				efis: data.efis === 'true',
				ifr_equipped: data.ifr_equipped === 'true',
				complex: data.complex === 'true',
				tailwheel: data.tailwheel === 'true',
				unmanned: data.unmanned === 'true',
				owner: data.owner === 'true',
				taa: data.taa === 'true'
			};
			acList.push(newAircraft);
		});
		axios({
			url: 'http://localhost:5000/api/v1/aircraft/many',
			method: 'POST',
			data: acList
		})
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log('Error');
			});
	});
