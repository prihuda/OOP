const Cart = require("../src/08")

test("Cart is:", () => {
    expect(Cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
        .addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
        .addItem({ item_id: 3, price: 5000, quantity: 2 })
        .removeItem({item_id: 2})
        .addItem({ item_id: 4, price: 400, quantity: 6 })
        .addDiscount('50%')
    ).toMatchObject( [
        { item_id: 1, price: 30000, quantity: 3 },
        { item_id: 3, price: 5000, quantity: 2 },
        { item_id: 4, price: 400, quantity: 6 }
    ],)
})

