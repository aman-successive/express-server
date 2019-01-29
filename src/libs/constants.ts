import { Ipermissions } from "./interfaces";
export const permissions: Ipermissions = {
  'trainee1': {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  'trainee2': {
    all: ["head-trainer"],
    read: ["trainer"],
    write: ["trainer"],
    delete: []
  }
};
