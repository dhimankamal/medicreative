// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { companyInfo } from "utils/data";

type Data = {
  info?: unknown;
  error?: Error;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require("nodemailer");
  const transporter: Transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    secure: true,
  });
  const mailData: MailOptions = {
    from: "no-reply@medicreatives.net",
    to: "contact@medicreatives.net",
    subject: `Message From ${req.body.subject}`,
    text: req.body.comments,
    html:
      "Name - " +
      req.body.name +
      "<br /> email - " +
      req.body.email +
      "<br /> message - " +
      req.body.comments,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      const mailOptions: MailOptions = {
        from: "no-reply@medicreatives.net",
        to: req.body.email,
        subject: `thanks`,
        text: "thanks",
        html: `<b> Thanks for being awesome! </b><br />
            We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. <br />
        Otherwise, we will reply by email as soon as possible.<br /> <br />
        Talk to you soon, Medicreatives <br />
        Contact us <br />
        Phone - ${companyInfo.phone} <br />
        Email - ${companyInfo.email}
        `,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json({ info });
        }
      });
    }
  });
}
