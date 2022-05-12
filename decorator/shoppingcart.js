const fs = require('fs');
const {decoConvertToEuro} = require('./decorator.js');
const Product = require('./products.js');


class ShoppingCart{

   constructor(){
       this.cart = [];
       this.total = 0;
   }

//parsing and saving as an array the products

unPack(){
    const productsJSON = fs.readFileSync('./products.json', 'utf8');
    return JSON.parse(productsJSON);
}

//add selection to cart 
addToCart(prodArray){
for(let obj of prodArray){
    let addedProduct = new Product(obj);
    this.cart.push(addedProduct);
    }    
}
//passing the decorator function to the higher order function
convertCartToEuro(decoConvertToEuro){
    //iterating through the cart
    for(let s of this.cart) {
    //adding converted price
    s.priceInEuro = decoConvertToEuro(s.price, s.currency);
   }    
}

totalSumEuro(){
    let onlyEuro = this.cart.map(obj => obj.priceInEuro);
    let total = 0;
    for(let i = 0; i < onlyEuro.length; i++) {total += parseFloat(onlyEuro[i])};
    this.total = total;
    return this.total;

}  

checkOut(){
    console.log(`Total cost is ${this.total} for ${this.cart} It's a steal!`);
}
}

module.exports = ShoppingCart;