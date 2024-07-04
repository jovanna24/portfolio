require('dotenv').config();

const express = require('express'); 
const cors = require('cors');
const router = express.Router(); 
const nodemailer = require("nodemailer"); 

const app = express(); 
app.use(express.json()); 
app.use(cors());
app.use("/", router); 
app.listen(5000, () => console.log("Server running")); 


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: process.env.EMAIL_USER, 
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
      } else {
        res.status(200).json({ code: 200, status: "Message Sent" });
      }
    });
  });