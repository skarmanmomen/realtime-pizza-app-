const cartController = () => {
    return {
        cart(req, res) {
            res.render("customers/cart")
        },
        update(req, res) {

            // for the example first time creating cart and adding basic object structure
            if (!req.session.cart) {
                req.session.cart = {
                    items: {

                    },
                    totalQty: 0,
                    totalPrice: 0
                }
            }

            let cart = req.session.cart;
            console.log(cart, "sfdsf");

            if (!cart.items[req.body._id]) {

                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalPrice = cart.totalPrice + req.body.price,
                    cart.totalQty = cart.totalQty + 1
            }
            else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice = cart.totalPrice + req.body.price
            }
            return res.json({ totalQty: req.session.cart.totalQty })


        }
    }
}

module.exports = cartController