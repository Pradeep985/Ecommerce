const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../data/contacts.json");

// Ensure the file exists
if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([]));

class ContactModel {
    static saveContact(name, email, message) {
        try {
            const contacts = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
            contacts.push({ name, email, message, date: new Date() });
            fs.writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2));
            return true;
        } catch (error) {
            console.error("Error saving contact:", error);
            return false;
        }
    }

    static getAllContacts() {
        try {
            return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
        } catch (error) {
            console.error("Error reading contacts:", error);
            return [];
        }
    }
}

module.exports = ContactModel;
