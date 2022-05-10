
const ShoppingCart = require('./shoppingcart');

const shoppingCart = new ShoppingCart();

let selectionArray = shoppingCart.unPack();
shoppingCart.addToCart(selectionArray);
shoppingCart.convertCartToEuro();
shoppingCart.totalSumEuro();
shoppingCart.checkOut();





   
    








