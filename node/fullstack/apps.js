let express = require('express');
const { hello } = require('fund');
// express is the framework of node js .
//to access the methods of express .
// we have to create the object of express.
let app = express();
let port = 7000;

let navLink = [
    { link: '/', name: 'Home' },
    { link: '/category', name: 'Category' },
    { link: '/products', name: 'Products' }
]

let categoryRouter = require('./src/controller/categoryRouter')(navLink);
let productsRouter = require('./src/controller/productsRouter')(navLink);


//static files path //
app.use(express.static(__dirname + '/public'))
//ejs file path //
app.set("views", "./src/view");
//view engine  //
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // res.send("Hello from express ! ");
    res.render('index', { title: "Home Page", text:"hello from nodes"})
})




app.use("/category", categoryRouter)
app.use("/products", productsRouter)

app.listen(port, (err) => {
    if (err) throw err;
    // console.log("Server is running on port " + port);
    console.log(`Server is running on port ${port}`);

})

