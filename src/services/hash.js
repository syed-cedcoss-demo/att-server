import { randomBytes, scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

// scrypt is callback based so with promisify we can await it
const scryptAsync = promisify(scrypt);

export const hashPassword = async (pass) => {
  const salt = randomBytes(16).toString('hex');
  const buf = await scryptAsync(pass, salt, 64);
  return `${buf.toString('hex')}.${salt}`;
};

export const verifyPassword = async (pass, hashPass) => {
  // split salt
  const [hashedPassword, salt] = hashPass.split('.');
  // we need to pass buffer values to timingSafeEqual
  const hashedPasswordBuf = Buffer.from(hashedPassword, 'hex');
  // we hash the new sign-in password
  const suppliedPasswordBuf = await scryptAsync(pass, salt, 64);
  // compare the new supplied password with the stored hashed password
  return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
};
