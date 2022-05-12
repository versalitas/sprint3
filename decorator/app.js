
const ShoppingCart = require('./shoppingcart');
const {getRates} = require('./decorator');

const shoppingCart = new ShoppingCart();

let selectionArray = shoppingCart.unPack();
shoppingCart.addToCart(selectionArray);
shoppingCart.convertCartToEuro(getRates);
shoppingCart.totalSumEuro();
shoppingCart.checkOut();





   
    








