/*

 */
/*سوالاتی که از کاربر باید پرسیده شود*/
var allQuestions = [
	{id: 1, title:'2+3', answer: '5'},
	{id: 1, title:'2^3', answer: '8'},
	{id: 1, title:'3-2', answer: '1'},
	{id: 1, title:'4/2', answer: '2'},
	{id: 1, title:'4*5', answer: '20'},
	{id: 1, title:'100/25', answer: '4'},
	{id: 1, title:'cpaital of IRAN', answer: 'tehran'},
];

var score = 0;
var mainAnswer = '';
allQuestions.forEach(function(question){
	mainAnswer = prompt(question.title + ' ?');

	if(mainAnswer === question.answer){
		score++;
	}
});
alert('your final score: ' + score);