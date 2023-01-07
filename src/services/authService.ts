import * as userRepository from '../repositories/userRepository.js';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(user: IUserSignUp) {
  organizeUser(user);

  return await userRepository.insertUser(user);
}

async function organizeUser(user: IUserSignUp) {
  delete user.confirmPassword;
}
