import { UserRepo } from "../repositories/user/UserRepository";
export default function seedData() {
  console.log("In seedData");
  const userRepo = new UserRepo();
  userRepo.createUser({
    name: "BANNER",
    id: UserRepo.generateObjectId()
  });
  userRepo.deleteUser({
    name: "HULK"
  });
  userRepo.updateUser({
    name: "STARK"
  });
}
