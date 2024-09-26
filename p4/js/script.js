/*

 */

/*شبیه سازی دیتابیس*/
var allUsers = [
	{id: 1, name:'atom', age: 23},
	{id: 2, name:'ali', age: 19},
	{id: 3, name:'mohsen', age: 50},
	{id: 4, name:'alex', age: 30},
	{id: 5, name:'faty', age: 19},
	{id: 6, name:'sara', age: 18},
	{id: 7, name:'salar', age: 26},
	{id: 8, name:'dora', age: 28},
	{id: 9, name:'samira', age: 45},
	{id: 10, name:'nadere', age: 35},

]

var isAll = allUsers.every(function(user){
	return user.age > 18
})

if(isAll == true){
	console.log("شما میتوانید کنفرانس رو ایجاد کنید")
}else{
	console.log("شما نمیتوانید کنفرانس ایجاد کنید")
}
