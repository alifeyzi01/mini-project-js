/*

 */

/*شبیه سازی دیتابیس*/
var usersList = [
	{id: 1, name: 'ali', family: 'atomic', age: 22,email: 'atom@atom.com'},
	{id: 2, name: 'hany', family: 'atomic', age: 27,email: 'hany@atom.com'},
	{id: 3, name: 'many', family: 'atomic', age: 24,email: 'many@atom.com'},
]

usersList.forEach(function(user){
	console.log("user name : " + user.name +"user family :"  + user.family)
})
