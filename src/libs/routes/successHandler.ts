export function successHandler(message, status, data) {
  return {
    Data: data || 'null',
    Message: message || 'success',
    Status: status || 202,
  };
}
