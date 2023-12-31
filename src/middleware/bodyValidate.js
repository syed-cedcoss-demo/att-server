import {
  emailValidation,
  passwordValidation,
  usernameValidation
} from '../validations/fieldsValidation.js';

export const signupValidate = (req, res, next) => {
  const { email, password, username, role } = req.body;
  if (!email || !password || !username || !role) {
    return res.status(406).send({
      success: false,
      msg: 'email, password, role and username are required'
    });
  }
  const isEmailValid = emailValidation(email);
  if (!isEmailValid?.success) {
    return res.status(406).send({
      success: false,
      msg: isEmailValid.msg
    });
  }
  const isValidPassword = passwordValidation(password);
  if (!isValidPassword?.success) {
    return res.status(406).send({
      success: false,
      msg: isValidPassword.msg
    });
  }
  const isValidUsername = usernameValidation(username);
  if (!isValidUsername?.success) {
    return res.status(406).send({
      success: false,
      msg: isValidUsername.msg
    });
  }

  next();
};

export const loginValidate = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(406).send({
      success: false,
      msg: 'email and password are required'
    });
  }
  const isEmailValid = emailValidation(email);
  if (!isEmailValid?.success) {
    return res.status(406).send({
      success: false,
      msg: isEmailValid.msg
    });
  }
  const isValidPassword = passwordValidation(password);
  if (!isValidPassword?.success) {
    return res.status(406).send({
      success: false,
      msg: isValidPassword.msg
    });
  }
  next();
};
