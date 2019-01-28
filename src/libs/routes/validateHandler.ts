export default function(ObjData) {
  return function(req, res, next) {
    const keys = Object.keys(ObjData);
    console.log("The keys are", keys);
    keys.forEach(function(key) {
      const item = ObjData[key];
      const value = item.in.map(function(items) {
        console.log("The value is", req[items][key]);
        return req[items][key];
      });
      console.log(value);
      if (item && item.required) {
        const validatedValue = value.filter(function(item) {
          console.log("The item is", item);
          return item;
        });
        if (validatedValue.length !== value.length) {
          next({
            error: "Not Valid",
            message: `${key} is required`,
            status: 404
          });
        }
      }
      if (item.string) {
        const validatedValue = value.filter(function(item) {
          console.log("The item is", item);
          return item;
        });
        validatedValue.forEach(function(IsString) {
          if (typeof IsString !== "string") {
            next({
              error: "Not Valid",
              message: `${IsString} is not string`,
              status: 404
            });
          }
        });
      }
      if (item.number) {
        const validatedValue = value.filter(function(item) {
          console.log("The item is", item);
          return item;
        });
        validatedValue.forEach(function(IsNumber) {
          if (typeof IsNumber !== "number") {
            next({
              error: "Not Valid",
              message: `${IsNumber} is not number`,
              status: 404
            });
          }
        });
      }
      if (item.regex) {
        const validatedValue = value.filter(function(item) {
          console.log("The item is", item);
          return item;
        });
        validatedValue.forEach(function(IsValid) {
          if (!item.regex.test(IsValid)) {
            next({
              error: "Not Valid",
              message: `${IsValid} is not valid`,
              status: 404
            });
          }
        });
      }
      if (item.isObject) {
        const validatedValue = value.filter(function(item) {
          console.log("The item is", item);
          return item;
        });
        validatedValue.forEach(function(IsObject) {
          if (typeof IsObject !== "object") {
            next({
              error: "Not Valid",
              message: `${IsObject} is not object`,
              status: 404
            });
          }
        });
      }
      if (item.custom) {
        item.custom(80);
      }
    });
    next();
  };
}
