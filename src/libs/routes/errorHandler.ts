export default function errorHandler(err, req, res, next) {
  console.log("Inside errorHandler");
  res.send({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: new Date()
  });
}
