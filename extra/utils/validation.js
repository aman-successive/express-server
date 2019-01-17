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
function validateUsers(){
    users.forEach( function(user) {
        const { traineeEmail , reviewerEmail } = user;
        if ( validateEmail(traineeEmail)){
          valid++;
        }
        else {
            invalid++;
        }
        if( validateEmail(reviewerEmail)){
          valid++;
        }
        else{
          invalid++;
        }
    });
    console.log(`There are ${valid} valid emails`);
    console.log(`There are ${invalid} invalid emails`);
}
validateUsers();
