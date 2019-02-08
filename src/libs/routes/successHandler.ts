export function successHandler(message: string, status: number, data: any): object {
  return {
    Data: data || 'null',
    Message: message || 'success',
    Status: status || 202,
  };
}
