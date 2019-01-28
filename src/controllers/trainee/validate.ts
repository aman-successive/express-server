const validateConfig = {
  create: {
    id: {
      required: true,
      string: true,
      in: ["body"],
      custom: function(value) {
        console.log("Value", value);
        //throw { error: "Error Occurred", message: "Message",status:202 };
      }
    },
    name: {
      required: true,
      regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: false,
      string: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  update: {
    id: {
      required: true,
      string: false,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {}
    }
  }
};
export default validateConfig;
