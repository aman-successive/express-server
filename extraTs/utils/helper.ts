export default function validateEmail(email: string): boolean {
  let regex = /^[A-Za-z0-9._%+-]+@successive.tech$/;
  return regex.test(email);
}
