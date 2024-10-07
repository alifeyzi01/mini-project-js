/*

 */
/*مبدا سفر را از کاربر گرفته*/

var cities = {
	tehrean:['tehrean','shahryar','eslamshahr','pardis','bumehen'],
	shiraz:['shiraz','fars','jamshid','shiraz pars'],
	mashhad:['mashhad','fariman','guchan'],
	tabriz:['tabriz','marand','jolfa','ahar']
}


var startProvine = prompt('استان مورد نظر خود را وارد کنید');

var mainProvinceCities = cities[startProvine];

mainProvinceCities.forEach(function(city){
	console.log(city)
});