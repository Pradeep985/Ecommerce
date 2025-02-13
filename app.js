const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/admin", adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found", path: null });
});

app.listen(3000, () => console.log("Server running on port 3000"));
