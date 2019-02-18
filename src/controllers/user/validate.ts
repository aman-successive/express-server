const validateConfig = {
  create: {
    email: {
      errorMessage: 'email is required',
      in: ['body'],
      // regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
      required: true,
    },
    name: {
      errorMessage: 'name is required',
      in: ['body'],
      required: true,
      string: true,
    },
    password: {
      in: ['body'],
      required: true,
      string: true,
    },
    role: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
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
