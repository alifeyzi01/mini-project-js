/*

 */

/*از کاربر کلمه مورد نظرشو میگیریم */
var word = prompt ('کلمه خودتون رو وارد کنید');

/*عملیات ریورس و چک کردن این که کلمه رفت و برگشتی یکسان است یا خیر */
var characterArray = word.split('');

var reverseCharacter = characterArray.reverse();
var reverseWord = reverseCharacter.join();


if(word === reverseWord){
	alert("از هر دو جهت به یک شکل خوانده میشود");
}else{
	alert("از هر دو جهت به یک شکل خوانده نمیشود ");
}

