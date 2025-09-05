let express = require('express');
let productsRouter = express.Router();

let Router = () => {
    productsRouter.route("/")
        .get((req, res) => {
            res.send(" products ! ");
        })

    productsRouter.route("/details")
        .get((req, res) => {
            res.send("products details ! ");
        })
    return productsRouter;
}

module.exports = Router;