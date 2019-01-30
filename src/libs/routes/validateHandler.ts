import validateHelper from "./validateHelper";
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
      if (!Array.isArray(validatedValue[0])) {
        if (item.string) {
          validateHelper(validatedValue[0], "string", next);
        }
      }
      if (item.number) {
        validateHelper(validatedValue[0], "number", next);
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
        validateHelper(validatedValue[0], "object", next);
      }
      if (item.custom) {
        item.custom(validatedValue[0]);
      }
    });
    next();
  };
}
