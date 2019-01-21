export default function validateEmail(email) {
  let regex = /^[A-Za-z0-9._%+-]+@successive.tech$/;
  return regex.test(email);
}
