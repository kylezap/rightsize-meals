//Daily calory requirements from fitness calculator RapidAPI//

const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=%3CREQUIRED%3E&weight=70&activitylevel=level_1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=bi_1&activitymin=25&weight=75';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://fitness-calculator.p.rapidapi.com/bmi?age=25&weight=65&height=180';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://fitness-calculator.p.rapidapi.com/macrocalculator?age=25&gender=male&height=180&weight=70&activitylevel=5&goal=extremelose';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://fitness-calculator.p.rapidapi.com/bodyfat?age=25&gender=male&weight=70&height=178&neck=50&waist=96&hip=92';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://fitness-calculator.p.rapidapi.com/idealweight?gender=male&height=180';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}