const fetch = require('node-fetch')

exports.handler = async function (event, context) {

	const api = 'https://pokeapi.co/api/v2/pokedex/kanto'

	const response = await fetch(api)
	const data = await response.json()

	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*", // Allow from anywhere
		},
		body: JSON.stringify(data),
	};
};