import { UserRepo } from '../repositories/user/UserRepository';
import { UserModel } from './../repositories/user/UserModel';
export default function seedData() {
  console.log('In seedData');
  const userRepo = new UserRepo(UserModel);
  userRepo.countData().then((res) => {
    if (res === 0) {
      userRepo.createUsers({
        email: 'head@successive.tech',
        name: 'HEAD-TRAINER',
        role: 'head-trainer',
      });
      userRepo.createUsers({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        role: 'trainee',
      });
    }
  });
}
