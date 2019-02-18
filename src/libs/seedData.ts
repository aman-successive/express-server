import * as bcrypt from 'bcrypt';
import { UserRepo } from '../repositories/user/UserRepository';
import { UserModel } from './../repositories/user/UserModel';
export default async function seedData(): Promise<void> {
  const saltRounds: number = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const pass = bcrypt.hashSync(process.env.PASSWORD, salt);
  const userRepo = new UserRepo(UserModel);
  const res = await userRepo.countData();
  try {
    if (res === 0) {
      userRepo.createUsers({
        email: 'head@successive.tech',
        name: 'HEAD-TRAINER',
        password: pass,
        role: 'head-trainer',
      });
      userRepo.createUsers({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        password: pass,
        role: 'trainee',
      });
    }
  }
  catch (err) {
    console.log(err);
  }
}
