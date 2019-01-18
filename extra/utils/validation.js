const users = [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
  },
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.com'
  }
  ];

let valid = 0, invalid = 0;
function validateEmail(email){
    let regex =/^[A-Za-z0-9._%+-]+@successive.tech$/;
    return(regex.test(email));

}
function validateUsers(user1){
    user1.forEach( function(user) {
        const { traineeEmail , reviewerEmail } = user;
        if ( validateEmail(traineeEmail) && validateEmail(reviewerEmail) ){
          valid++;
        }
        else {
            invalid++;
        }
    });
    console.log(`There are ${valid} valid emails`);
    console.log(`There are ${invalid} invalid emails`);
}
validateUsers(users);
