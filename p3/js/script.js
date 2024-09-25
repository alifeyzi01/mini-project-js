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
]

/* شبیه سازی سبد کاربر*/

var userBasket =[
	{id: 1, name :'pc', price: 300000000},
	{id: 2, name :'modem', price: 5000000},
]


/* از کاربر ورودی میگیرییم ببین چه محصولی میخواد*/

var userProduct = prompt("Enter the Name of product: ")

var requestProduct;

/*چک کردن اینکه محصول وجود دارد یا نه */

var isInProduct = allProducts.some(function(product){
	if(product.name == userProduct){
		 requestProduct = product
		 return true
	}
	return product.name == userProduct
})

if(isInProduct == true){
	var newProduct ={
		id:3,
		name : requestProduct.name,
		price : requestProduct.price,
	}
	console.log(userBasket)

	var sumPrice=0
	userBasket.forEach(function(price){
		sumPrice = sumPrice + product.price 
	})
	alert("Total price: " + sumPrice)

}else{
	console.log("محصول در انبار موجود نیست.")
}




























