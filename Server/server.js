require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Brevo = require("@getbrevo/brevo");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);

app.get('/', (req, res) => {
    res.send({ message: "Server is running on port 8003" });
});

app.post("/", (req, res) => {
    const email_address = req.body.email_address;
    console.log("Received:", email_address);

    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { email: "4nshsampson@gmail.com", name: "Anish" };
    sendSmtpEmail.to = [{ email: email_address }];
    sendSmtpEmail.subject = "Welcome to DEV@Deakin!";
    sendSmtpEmail.textContent = "Thank you for signing up for our newsletter";

    apiInstance.sendTransacEmail(sendSmtpEmail)
        .then(() => {
            console.log("Email successfully sent to " + email_address);
            res.json({ status: "success", received: email_address });
        })
        .catch((error) => {
            console.error("Unable to send email: " + error);
            res.status(500).json({ status: "error", message: error.message });
        });
});

app.listen(8003, () => {
    console.log("Server is running on port 8003");
});