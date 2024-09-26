/*

 */

/*شبیه سازی دیتابیس*/
var allProducts = [
	{id: 1, name:'phone', price: 19000000},
	{id: 2, name:'phone Apple', price: 50000000},
	{id: 3, name:'phone sammsung', price: 75000000},
	{id: 4, name:'Tblet 17.5inc', price: 13000000},
	{id: 5, name:'laptap', price: 100000000},
	{id: 6, name:'modem', price: 5000000},
	{id: 7, name:'pc', price: 300000000},
	{id: 7, name:'ram64', price: 200000},
];

/* شبیه سازی سبد کاربر*/

var userBasket =[
	{id: 1, name :'pc', price: 300000000},
	{id: 2, name :'modem', price: 5000000},
];
/* کاربر میخواد محصول اضافه کنه یا حذف کنه*/

var userRequset = prompt("1.addproudct: \n 2.remove product: ");

/*چک کردن اینکه کاربر چه ورودی رو خواسته بعد فرایند اضافه یا حذف کردن اعمال میشه*/
if (userRequset == '1'){
	var userProductName = prompt('Enter your name:');
	
	var productDataAllPR;
	var isInShop = allProducts.some(function(product){
		if(product.name == userProductName){
			productDataAllPR = product;
			return true;
		}
		return product.name == userProductName;
	});
	
	if(isInShop == true){
		var newProduct ={
			id : 3,
			name : productDataAllPR.name,
			price :productDataAllPR.price 
		};
		userBasket.push(newProduct);
		console.log("سبد شما :" , userBasket);
	}else{
		alert('این محصول وجود ندارد');
	}


}else if(userRequset == '2'){
	var userProductName = prompt('Enter your product name :')
	var productIndex = userBasket.findIndex(function(product){
		return product.name == userProductName;
	});
	userBasket.splice(productIndex,1);
	console.log("حذف شد:" , userBasket);
 

	
}else{
	alert("لطفا گزینه درست رو انتخاب کن");
}
