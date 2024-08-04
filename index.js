// const lib = require('./lib.js');
// console.log(lib.sum(2, 3))
// import { sum } from './lib.js'

// console.log(sum(3, 4))   this is for module js

// const { json } = require("express");
// const fs = require("fs");


// const express = require("express");       // importing express
// const { stringify } = require('querystring');


// const text = fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })

// console.log("hello swapnil hey brother how are you can you come with me")
// const server = express();  // for creating server
// const index = fs.readFileSync('index.html', 'utf-8', (err, html) => {
//     console.log(html)
// })

// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
// const products = data.products;
// const modifiedIndex = index.replace("**tittle**", product.title).replace("**name**", product.category).replace("**id**", product.id).replace("**price**", product.price).replace("**description**", product.description)


// const http = require('http');
// const data = { age: 5, name: "swapnil" }
// const server = http.createServer((req, res) => {
//     console.log("server started");
// console.log(products)
// res.setHeader('content-type', 'text/html');
// res.end(JSON.stringify(data))
// res.end(index)
// console.log(req.url.split('/'))    //output of this [ '', 'product', '1' ] and we want 1 here
// console.log(req.url.split('/')[2])
// console.log(product)
// switch (req.url) {
//     case "/":
//         res.setHeader('content-type', 'text/html');
//         res.end(modifiedIndex);
//         break;
//     case "/api":
//         res.setHeader('content-type', 'application/json');
//         res.end(JSON.stringify(data))
//         break;
//     default:
//         res.writeHead(404);
//         res.end();
// }
//     if (req.url.startsWith('/product')) {
//         let id = req.url.split('/')[2];
//         const product = products.find(p => p.id === +id)
//         console.log(product)
//         const modifiedIndex = index.replace("**tittle**", product.title).replace("**name**", product.category).replace("**id**", product.id).replace("**price**", product.price).replace("**description**", product.description)
//         res.end(modifiedIndex)
//     }


// })
// server.listen(8080);
// const express = require('express');
// const server = express();
// const auth = (req, res, next) => {
//     console.log(req.query)
//     if (req.query.password == '123') {
//         next()
//     }
//     else {
//         res.json("you are not allowed")
//         console.log(req.query.password)
//     }
// }
// server.use(auth);
// server.get('/', auth, (req, res) => {
//     res.json({ type: "GET" })
// })
// server.listen(8080);


// model view controller 
require("dotenv").config();
const fs = require("fs")
// const model=require('./Model/product');
const express = require("express");
const mongoose = require('mongoose')
const productRouter = require("./routes/products")
const Path = require('path')
const server = express();
const cors = require('cors')
console.log("env", process.env.DB_PASSWORD);

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('data base connected')
}
//body parsar
server.use(cors());
server.use(express.json())
server.use(express.static(Path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use("/products", productRouter.Router)
server.use("*", (req, res) => {
    res.sendFile(Path.resolve(__dirname, 'dist', 'index.html'))
})





server.listen(process.env.PORT)



