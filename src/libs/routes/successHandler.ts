export function successHandler(message, status, data) {
  return {
    Message: message || "success",
    Status: status || 202,
    Data: data || "null"
  };
}
