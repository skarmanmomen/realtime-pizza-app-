import axios from "axios"
import Noty from "noty";
const addToCart = document.querySelectorAll(".add-to-cart")
const cartCouter = document.getElementById("cartCouter")



//  updateCart
const updateCart = async (pizza) => {
    try {
        const res = await axios.post("/add-cart", pizza)
        cartCouter.innerText = res.data.totalQty
        new Noty({
            text: "Item added to cart",
            timeout: 1000,
            progressBar: false,
            type: "success",
            layout: "topRight"
        }).show();

    } catch (error) {
        new Noty({
            text: "Something went wrong",
            timeout: 1000,
            progressBar: false,
            type: "error",
            layout: "topRight"
        }).show();
    }



}

addToCart.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        const pizza = JSON.parse(btn.dataset.pizza)

        updateCart(pizza)
    })
})