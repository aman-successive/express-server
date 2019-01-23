import { Iusers } from "../interfaces";
import validateEmail from "./helper";
let valid: number = 0,
  invalid: number = 0;
export default function validateUsers(users: Iusers[]): void {
  users.forEach(function(user: Iusers): void {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      valid++;
    } else {
      invalid++;
    }
  });
  console.log(`There are ${valid} valid emails`);
  console.log(`There are ${invalid} invalid emails`);
}
