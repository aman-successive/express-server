import { diamond, triangle } from "./pattern";
import { hasPermission, validateUsers } from "./utils";

const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.com"
  }
];
diamond(5);
triangle(10);
hasPermission("getUsers", "all", "trainer");
validateUsers(users);
