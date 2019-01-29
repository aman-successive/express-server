export default function validateHandler(ObjData) {
  return function(req, res, next) {
    const keys = Object.keys(ObjData);
    console.log("The keys are", keys);
    keys.forEach(function(key) {
      const item = ObjData[key];
      const value = item.in.map(function(items) {
        return req[items][key];
      });
      console.log("The value is", value);
      console.log(value);
      const validatedValue = value.filter(item => item);
      if (item && item.required) {
        if (validatedValue.length !== value.length) {
          next({
            error: "Not Valid",
            message: `${key} is required`,
            status: 404
          });
        }
      }
      if (item.string) {
          if (typeof validatedValue[0] !== "string") {
            next({
              error: "Not Valid",
              message: `${validatedValue[0]} is not string`,
              status: 404
            });
          }
        }
      if (item.number) {
        if (typeof validatedValue[0] !== "number") {
          next({
            error: "Not Valid",
            message: `${validatedValue[0]} is not number`,
            status: 404
          });
        }
      }
      if (item.regex) {
        if (item.regex.test(validatedValue[0])) {
          next({
            error: "Not Valid",
            message: `${validatedValue[0]} is not valid`,
            status: 404
          });
        }
      }
      if (item.isObject) {
        if (typeof validatedValue[0] !== "object") {
          next({
            error: "Not Valid",
            message: `${validatedValue[0]} is not object`,
            status: 404
          });
        }
      }
      if (item.custom) {
        item.custom(validatedValue[0]);
      }
    });
    next();
  };
}
