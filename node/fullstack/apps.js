let express = require('express');
// express is the framework of node js .
//to access the methods of express .
// we have to create the object of express.
let app = express();
let port = 7000;

let categoryRouter = require('./src/controller/categoryRouter')();
let productsRouter = require('./src/controller/productsRouter')();

app.get('/', (req, res) => {
    res.send("Hello from express ! ");
    res.end();
})

 


app.use("/category",categoryRouter)
app.use("/products",productsRouter)

app.listen(port, (err) => {
    if (err) throw err;
    // console.log("Server is running on port " + port);
    console.log(`Server is running on port ${port}`);

})

