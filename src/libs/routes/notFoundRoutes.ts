export default function notFoundRoutes(req, res, next){
  console.log("Inside notFoundRoutes");
  next({error:"Not found"});
}
