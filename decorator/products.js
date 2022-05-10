class Products{
    
    constructor({name, price, currency}){
    this.name = obj.name;
    this.price = obj.price;
    this.currency = obj.currency;
    }
    
    getPrice() {
        return this.price;
    }
}

module.exports = Products;