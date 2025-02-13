const ProductModel = require("../models/ProductModel");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).send("Product title is required.");
    }

    const success = ProductModel.saveProduct(title);

    if (success) {
        res.redirect("/");
    } else {
        res.render("add-product", {
            pageTitle: "Add Product",
            path: "/admin/add-product",
            errorMessage: "Failed to save product. Please try again."
        });
    }
};

exports.getProducts = (req, res, next) => {
    const products = ProductModel.getAllProducts();
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};
