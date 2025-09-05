let express = require('express');
let categoryRouter = express.Router();

let Router = () => {
    categoryRouter.route("/")
        .get((req, res) => {
            res.send(" category ! ");
        })

    categoryRouter.route("/details")
        .get((req, res) => {
            res.send("category details ! ");
        })
    return categoryRouter;
}

module.exports = Router;