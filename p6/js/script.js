/*

 */

/* شبیه سازی سبد کاربر*/
var userBasket = [
	{id: 1, name:'phone', price: 1000000},
	{id: 2, name:'phone Apple', price: 2500000},
	{id: 3, name:'phone sammsung', price: 1500000},
	{id: 4, name:'cable', price: 70000},
	{id: 5, name:'acsesory', price: 55000},
	{id: 6, name:'ram', price: 85000},
  ];

/*فیلتر کردن محصولات در سبد با توجه به سیاست موجودی که وجود دارد برای هزینه پست */

var filterProducts = userBasket.filter(function(product){
	return product.price < 100000
});

/*هزینه ارسال پست*/
var postPrice = filterProducts.length * 1000;

/*محاسبه هزینه نهایی که کاربر باید تسویه حساب کند*/
var sumPrice = 0;

userBasket.forEach(function(product){
	sumPrice += product.price
});

var totalPrice = sumPrice + postPrice;

console.log("مبلغ نهایی : ",totalPrice);