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
      const validatedValue = value.filter(item => item)[0];
      if (item && item.required) {
        if (validatedValue == null) {
          next({
            error: "Not Valid",
            message: `${key} is required`,
            status: 404
          });
        }
      }
      if (!Array.isArray(validatedValue)) {
        if (item.string) {
          validateHelper(validatedValue, "string", next);
        }
      }
      if (item.number) {
        validateHelper(validatedValue, "number", next);
      }
      if (item.regex) {
        if (item.regex.test(validatedValue)) {
          next({
            error: "Not Valid",
            message: `${validatedValue} is not valid`,
            status: 404
          });
        }
      }
      if (item.isObject) {
        validateHelper(validatedValue, "object", next);
      }
      if (item.custom) {
        item.custom(validatedValue);
      }
    });
    next();
  };
}
