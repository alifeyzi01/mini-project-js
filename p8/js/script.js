/*

 */
/*لیستی از کارهای ما */
var todoArrayList =[
	{id: 1, title: 'learn js', isDoing: false},
	{id: 2, title: 'learn pyton', isDoing: true},
	{id: 3, title: 'network+', isDoing: false},
	{id: 4, title: 'html', isDoing: false},
]

/*از کاربر ورودی میگیریم که تصمیم چی داره */

var menu = prompt('یکی از موارد زیر را انتخاب کنید\n 1.اضافه کردن\n 2.حذف کردن \n 3.درحال انجام ')

if(menu === '1'){
	var newTodoName = prompt("کار خود را وارد کنید", '');
	var newTodoObject ={
		id: todoArrayList.length + 1,
		title: newTodoName,
		isDoing: false
	}
	todoArrayList.push(newTodoObject);
	console.log("Todos Array :", todoArrayList);
}else if(menu === '2'){
	var removeTodoName = prompt("مورد خود را انتخاب کنید:",'');
	var removeTodoIndex = todoArrayList.findIndex(function(todo){
		return todo.title === removeTodoName;
	})
	todoArrayList.splice(removeTodoIndex,1);
	console.log("Todos Array:", todoArrayList);
}else if(menu === '3'){
	var editableTodoName = prompt("کاری را که میخواهید ویرایش کنید را وارد کنید:", '');
	todoArrayList.forEach(function(todo){
		if(todo.title === editableTodoName){
			todo.isDoing = true;
		}
	})
	console.log("todos Array: ", todoArrayList)

}else{
	alert("گزینه وارد شده اشتباه است")
}
