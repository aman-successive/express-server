import { Ipermissions } from './interfaces';
export const permissions: Ipermissions = {
  getUsers: {
    all: ['head-trainer'],
    delete: [],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
  },
  getUsers1: {
    all: ['head-trainer'],
    delete: [],
    read: ['trainer'],
    write: ['trainer'],
  },
};
