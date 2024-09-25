/*

 */

/*شبیه سازی دیتابیس*/
var users = [
	{id: 1, name: 'ali', family: 'atomic', age: 22,email: 'atom@atom.com'},
	{id: 2, name: 'hany', family: 'atomic', age: 27,email: 'hany@atom.com'},
	{id: 3, name: 'many', family: 'atomic', age: 24,email: 'many@atom.com'},
]

/*
گرفتن ورودی از کاربر و بررسی شرایط 
*/
var userName = prompt('Enter your Name:')
var userFamilyName = prompt('Enter your Family Name:')
var userAge = prompt('Enter your age:')
var userEmail = prompt('Enter your email:')

if(userName.length < 3 || userName > 10){
	alert ("نام شما حداقل 3 و 10 کارکتر میتواند داشته باشد ")
}else if(userFamilyName.length < 3 || userFamilyName > 10 ){
	alert ("نام خانوادگی شما حداقل 3 و 10 کارکتر میتواند داشته باشد ")
}else if (isNaN(userAge) || userAge.length > 4){
	console.log("لطفا سن را به درسی وارد کنید")
}else{
	var newUer ={
		id : 4,
		name : userName,
		family : userFamilyName,
		age : userAge,
		email : userEmail
	}
	users.push(newUer)
	console.log(users)
}
