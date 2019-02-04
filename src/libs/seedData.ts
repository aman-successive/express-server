import { UserRepo } from '../repositories/user/UserRepository';
export default function seedData() {
  console.log('In seedData');
  const userRepo = new UserRepo();
  userRepo.countData().then((res) => {
    if (res === 0) {
      userRepo.createUser({
        createdAt: new Date(),
        email: 'head@successive.tech',
        name: 'HEAD-TRAINER',
        role: 'head-trainer',
      });
      userRepo.createUser({
        createdAt: new Date(),
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        role: 'trainee',
      });
    }
  });
}
