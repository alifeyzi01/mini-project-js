/*

 */
/* لیست کاربران و وظایفشان*/
var tasksArray = {
	atom:['html','css','js'],
	sina:['admin','seo'],
	amir:['content','vue','react'],
	salar:['link building','git push']
}

/*از مدیر نام کارمند و تسکی که میخواهد اضافه شود را میگیریم*/

var newTaskName = prompt('تسک مورد نظرتان را وارد کنید:');
var employName = prompt('کارمند مورد نظرتان را وارد کنید:');

var employTasks = tasksArray[employName];
employTasks.push(newTaskName);

console.log(tasksArray);

