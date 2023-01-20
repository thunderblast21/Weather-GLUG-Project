const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f7503303msh0b2c3053d364971p1703cbjsn42d0ecc5fabc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Andhra Pradesh', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));