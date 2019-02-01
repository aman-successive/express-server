import { Ipermissions } from './interfaces';
export const permissions: Ipermissions = {
  trainee1: {
    all: ['head-trainer'],
    delete: [],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
  },
  trainee2: {
    all: ['head-trainer'],
    delete: [],
    read: ['trainer'],
    write: ['trainer'],
  },
};
