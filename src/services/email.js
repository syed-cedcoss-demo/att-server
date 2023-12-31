import chalk from 'chalk';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { forget, signup } from '../../public/templates/email-ui.js';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  service: 'outlook',
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3'
  },
  port: 587,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS
  }
});

export const registrationMail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: data?.email,
      subject: 'Account Confirmation Mail',
      text: 'Account Confirmation Mail',
      html: signup(data)
    });
    console.log(chalk.bgYellowBright.bold('sent email id:', info.messageId));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
};

export const forgetPassEmail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: data?.email,
      subject: 'Password Reset Mail',
      text: 'Password Reset Mail',
      html: forget(data)
    });
    console.log(chalk.bgYellowBright.bold('sent email id:', info.messageId));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
};
export const serverDown = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: 'syedhasnainmehadi@yopmail.com',
      subject: 'Server Crashed',
      text: 'Server Crashed',
      html: '<h1>Server Crashed, Please check</h1>'
    });
    console.log(chalk.red('sent email id:', info.messageId));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
};
