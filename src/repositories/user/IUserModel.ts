import IVersionableModel from '../versionable/IVersionableModel';

export default interface IUserModel extends IVersionableModel {
  name: string;
  role: string;
  email: string;
}
