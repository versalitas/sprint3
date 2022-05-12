
const {convertToEuro} = require('./decorator');
const Product = require('./products.js');
const fs = require('fs');

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

addToCart(prodArray){
for(let obj of prodArray){
    let addedProduct = new Product(obj);
    this.cart.push(addedProduct);
    }    
}
//decorator function inside
convertCartToEuro(func){
for(let s of this.cart) {
    s.priceInEuro = convertToEuro(s.price, s.currency,func);
    
 }    
}

totalSumEuro(){
    let onlyEuro = this.cart.map(obj => obj.priceInEuro);
    //to do fix 
    let total = 0;
    for(let i = 0; i < onlyEuro.length; i++) {total += parseFloat(onlyEuro[i])};
    this.total = total;
    return this.total;

}  

checkOut(){
    console.log(`Total cost is ${this.total}. It's a steal!`);
}
}

module.exports = ShoppingCart;