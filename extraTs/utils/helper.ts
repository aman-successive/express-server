export default function validateEmail(email: string): boolean {
  const regex = /^[A-Za-z0-9._%+-]+@successive.tech$/;
  return regex.test(email);
}
