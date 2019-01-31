import { UserRepo } from "../repositories/user/UserRepository";
export default function seedData() {
  console.log("In seedData");
  const userRepo = new UserRepo();
  userRepo.createUser({
    name: "User"
  });
  userRepo.deleteUser({
    name:"Aman"
  })
}
