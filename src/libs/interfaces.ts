export interface Ipermissions {
  [getUser: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
export interface Iusers {
  traineeEmail: string;
  reviewerEmail: string;
}
