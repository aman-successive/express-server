import { Ipermissions } from "./interfaces";
export const permissions: Ipermissions = {
  'getUsers': {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  'getUsers1': {
    all: ["head-trainer"],
    read: ["trainer"],
    write: ["trainer"],
    delete: []
  }
};
