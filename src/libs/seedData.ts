import * as bcrypt from 'bcrypt';
import { UserRepo } from '../repositories/user/UserRepository';
import { UserModel } from './../repositories/user/UserModel';
export default function seedData() {
  console.log('In seedData');
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const pass = bcrypt.hashSync(process.env.PASSWORD, salt);
  console.log(pass);
  const userRepo = new UserRepo(UserModel);
  userRepo.countData().then((res) => {
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
  });
}
