// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

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
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    secure: true,
  });
  const mailData: MailOptions = {
    from: "dhimank966@gmail.com",
    to: "dhimank079@gmail.com",
    subject: `Message From ${req.body.subject}`,
    text: req.body.comments,
    html:
      "Name - " +
      req.body.name +
      "email - " +
      req.body.email +
      "message - " +
      req.body.comments,
  };
  transporter.sendMail(mailData, (err,info) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      const mailOptions: MailOptions = {
        from: "dhimank966@gmail.com",
        to: req.body.email,
        subject: `thanks`,
        text: "thanks",
        html: "thanks for contact medicreatives",
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
