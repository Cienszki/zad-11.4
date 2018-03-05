function Phone(brand, price, color) {

	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + 'the color is ' + this.color + 'and the price is ' + this.price + '.');
};

var iPhone = new Phone('Apple', 4000, 'white'),
	SamsungGalaxy = new Phone('Samsung', 3500, 'black'),
	OnePlus = new Phone('OnePlus', 2800, 'red');

iPhone.printInfo();
SamsungGalaxy.printInfo();
OnePlus.printInfo();
