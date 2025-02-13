const ContactModel = require("../models/ContactModel");

exports.getContactUs = (req, res, next) => {
    res.render("contactus", {
        pageTitle: "Contact Us",
        path: "/contactus"
    });
};

exports.postContactUs = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("All fields are required.");
    }

    const success = ContactModel.saveContact(name, email, message);

    if (success) {
        res.redirect("/success");
    } else {
        res.render("contactus", {
            pageTitle: "Contact Us",
            path: "/contactus",
            errorMessage: "Failed to save contact. Please try again."
        });
    }
};

exports.getSuccess = (req, res, next) => {
    res.render("success", {
        pageTitle: "Success",
        path: "/success"
    });
};
