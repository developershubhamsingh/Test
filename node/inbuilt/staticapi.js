let fs = require('fs');
let http = require('http')

let server = http.createServer((req, res) => {
    // reading json file.
    fs.readFile("city.json", "utf-8", (error, data) => {
        if (error) throw error;
        // retuning data .
        res.write(data);
        res.end();
    })

})
server.listen(7000, (err) => {
    if (err) throw err;
    console.log("Server Running on Port no 7000 .")
})