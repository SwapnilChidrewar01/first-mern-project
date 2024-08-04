
const express = require("express");
const productcontroller = require("../controller/product")
const Router = express.Router();

Router
    .get('/', productcontroller.GetAll)
    .get('/:id', productcontroller.Readone)
    .post('/', productcontroller.Creat)
    .put('/:id', productcontroller.Replace)
    .patch('/:id', productcontroller.update)
    .delete('/:id', productcontroller.remove)

exports.Router = Router