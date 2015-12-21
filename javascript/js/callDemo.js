function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0) {
        throw RangeError('Cannot create product ' +
            this.name + ' with a negative price')
    }
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

//var cheese = new Food('feta', -5);
var cheese = new Food('feta', 5);
console.log('cheese: ' + cheese.name + cheese.price + cheese.category);
var fun = new Toy('robot', 40);
console.log('cheese: ' + fun.name + fun.price + fun.category);

//invoke an anonymous function
var animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species
                + ' ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}




