
const fs = require("fs")


// const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))
// const products = data.products
const model = require('../Model/product');
const product = model.product;




// Read
exports.GetAll = async (req, res) => {
    const products = await product.find();
    res.json(products)
}

// indivual read
exports.Readone = async (req, res) => {
    const id = req.params.id;
    // const product = product.find(p => p.id == id)
    // res.json(product)
    const productOne = await product.findById(id);
    res.json(productOne)

}

// Add 
exports.Creat = (req, res) => {

    // console.log(req.body)
    const products = new product(req.body)
    // res.json(products)
    products.save().then(function (err) {
        if (!err) {
            res.send("Successfully Added to th DataBase.");
        } else {
            res.send(err);
        }
    });
}

// replace 
exports.Replace = async (req, res) => {
    const id = req.params.id;
    // const productindex = products.findIndex(p => p.id == id)
    // console.log(req.body)
    // products.push(req.body)
    // products.splice(productindex, 1, { ...req.body, id: id })
    try {
        const doc = await product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);

    }
    // res.json(products)
}



// update 
exports.update = async (req, res) => {
    const id = req.params.id;
    // const productindex = products.findIndex(p => p.id == id)
    // console.log(req.body)
    // products.push(req.body)
    // products.splice(productindex, 1, { ...req.body, id: id })
    try {
        const doc = await product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);

    }
}


// remove elements
exports.remove = async (req, res) => {
    const id = req.params.id;
    // const productindex = products.findIndex(p => p.id == id)
    // console.log(req.body)
    // products.push(req.body)
    // products.splice(productindex, 1, { ...req.body, id: id })
    try {
        const doc = await product.findOneAndDelete({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);

    }
}