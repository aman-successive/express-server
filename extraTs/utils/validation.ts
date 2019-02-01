import { Iusers } from '../interfaces';
import validateEmail from './helper';
// tslint:disable-next-line:one-variable-per-declaration
let valid: number = 0,
  invalid: number = 0;
export default function validateUsers(users: Iusers[]): void {
  users.forEach((user: Iusers): void => {
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
