const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/tags/list';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/categories/list';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const url = 'https://yummly2.p.rapidapi.com/reviews/list?offset=0&globalId=a8d6747a-bfaa-46a7-92fb-892e3f76b264&limit=20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaf2ef351msh32ee63f9a7ee9c9p1e9472jsn19c14f4bff1c',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}