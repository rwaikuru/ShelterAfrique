import { EmailSetup } from "@/models/EmailSetup";

var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  try {
    const emailSetup = await EmailSetup.findOne({
      order: ["email"],
    });

    if(!emailSetup){
      throw Error("No email address smtp setup!")
    }
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${emailSetup?.dataValues?.email}`,
        pass: `${emailSetup?.dataValues?.password}`,
      },
    });

    var mailOptions = {
      from: `${emailSetup?.dataValues?.email}`,
      to: toEmail,
      subject: subject,
      text: otpText,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("Error sending email:", error);
          reject(error); // Reject the promise with the error
        } else {
          resolve(true); // Resolve the promise with a true value
        }
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
