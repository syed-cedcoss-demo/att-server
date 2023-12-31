import chalk from 'chalk';
import { setInterval } from 'timers';
import userModel from '../models/userModel.js';

const cron = () => {
  // OTP RESET
  const otpReset = async () => {
    console.log('OTP RESET RUN : ', new Date().toString());
    const minsAgo = new Date(Date.now() - 1000 * 60 * 10);
    await userModel.updateMany({ createdAt: { $lte: minsAgo } }, { $unset: { otp: 1 } });
  };

  try {
    // RUN EVERY 10 MINUTES.
    if (process.env.NODE_APP_INSTANCE === 0) {
      setInterval(() => {
        otpReset();
      }, 1000 * 60 * 10);
    }
  } catch (error) {
    console.log(chalk.bgRed.bold(error.message));
  }
};
export default cron;
