import validateEmail from "./helper";
let valid = 0,
  invalid = 0;
export default function validateUsers(user1) {
  user1.forEach(function(user) {
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
