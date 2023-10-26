// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import mailSender from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const SENDGRID_EMAIL_FROM = process.env.SENDGRID_EMAIL_FROM || "";
const SENDGRID_EMAIL_TO = process.env.SENDGRID_EMAIL_TO || "";
mailSender.setApiKey(SENDGRID_API_KEY);

if (!SENDGRID_API_KEY) console.log("no sendgrid api key");
else console.log("found api key!");

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, msg } = req.body;

  const emailTemplate = {
    to: SENDGRID_EMAIL_TO, // Change to your recipient
    from: SENDGRID_EMAIL_FROM, // Change to your verified sender
    subject: "Message Sent from Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
  };

  console.log(
    SENDGRID_API_KEY,
    SENDGRID_EMAIL_FROM,
    SENDGRID_EMAIL_TO,
    emailTemplate
  );

  try {
    await mailSender.send(emailTemplate);
    console.log("Email Sent!");
    return res.status(200).json({});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
}
