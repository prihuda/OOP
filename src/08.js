const fs = require('fs');

class Cart {
	constructor() {
		this.array = [];
		this.discount = 0;
	}
	addItem({item_id, price, quantity=1}) {
		this.array.push({item_id, price, quantity});
		return this;
	}
	removeItem({item_id}) {
		this.array = this.array.filter(function(e) {
			return e.item_id != item_id
		});
		return this;
	}
	addDiscount(percent) {
		this.discount = parseFloat(percent) / 100.00;
		return this
		// const discount = parseFloat(percent) / 100.0
		// return discount
	}
	totalItems() { return this.array.length }
	totalQuantity() {
		let total = 0;
		this.array.forEach(function(e) { total += e.quantity; });
		return total;
	}
	totalPrice() {
		let total = 0;
		let discount = this.discount;
		this.array.forEach(function(e) {
			total += (e.price - (e.price * discount)) * e.quantity;
		});
		return total;
	}
	showAll() {
		for (let i = 0; i < this.array.length; i++)
			return console.log(this.array);
	}
	checkout() {
		let json = JSON.stringify(this.array)
		fs.writeFile('cart.json', json, 'utf8', function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The cart data was saved!");
		});
	}
}

const cart = new Cart()
const a = cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
	.addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
	.addItem({ item_id: 3, price: 5000, quantity: 2 })
	.removeItem({item_id: 2})
	.addItem({ item_id: 4, price: 400, quantity: 6 })
	.addDiscount('50%')
// const b = cart.totalItems()
// console.log(a)
// console.log(b)

module.exports = Cart;
