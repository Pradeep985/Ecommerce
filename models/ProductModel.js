const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../data/products.json");

// Ensure the data directory exists
const DATA_DIR = path.dirname(FILE_PATH);
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure the products.json file exists
if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

class ProductModel {
    static saveProduct(title) {
        try {
            const products = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
            products.push({ title });
            fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2));
            return true;
        } catch (error) {
            console.error("Error saving product:", error);
            return false;
        }
    }

    static getAllProducts() {
        try {
            const products = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
            return products;
        } catch (error) {
            console.error("Error reading products:", error);
            return [];
        }
    }
}

module.exports = ProductModel;
