import { Iusers } from './interfaces';
import { diamond, triangle } from './pattern';
import { hasPermission, validateUsers } from './utils';
const users: Iusers[] = [
  {
    reviewerEmail: 'reviewer1@successive.tech',
    traineeEmail: 'trainee1@successive.tech',
  },
  {
    reviewerEmail: 'reviewer1@successive.com',
    traineeEmail: 'trainee1@successive.tech',
  },
];
console.log('****************Pattern starts*********************');
diamond(5);
triangle(10);
console.log('****************Pattern ends*********************');
console.log('****************Utils starts*********************');
hasPermission('getUsers1', 'all', 'head-trainer');
validateUsers(users);
console.log('****************Utils starts*********************');
