const validateConfig = {
  create: {
    id: {
      in: ['body'],
      required: true,
      string: true,
      custom(value) {
        console.log('Value', value);
        if (Array.isArray(value)) {
          console.log('it is an array');
        }
        // throw { error: "Error Occurred", message: "Message",status:202 };
      },
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
      required: false,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: false,
      string: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: false,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: false,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
      custom(dataToUpdate) {
        console.log('Updated' );
      },
    },
    id: {
      in: ['body'],
      required: true,
      string: false,
    },
  },
};
export default validateConfig;
