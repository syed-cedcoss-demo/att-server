import chalk from 'chalk';
import { logCreator } from '../utils/logCreator.js';

const appError = (res, err) => {
  console.log(chalk.bgRed.bold(err.message));
  if (process.env.NODE_ENV === 'production') {
    logCreator(`error ==> ${err.message}, description==>${err.stack}`);
    res.status(500).json({
      success: false,
      msg: 'Internal server error',
      data: {}
    });
  } else {
    res.status(500).json({
      success: false,
      msg: err.message,
      data: {},
      stack: err.stack
    });
  }
};

export default appError;
