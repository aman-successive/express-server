export default function(value, type, next) {
  if (typeof value !== type) {
    next({
      error: 'Not Valid',
      message: `${value} is not a ${type}`,
      status: 401,
    });
  }
}
