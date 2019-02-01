import { permissions } from '../constants';
export default function hasPermission(
  moduleName: string,
  permissionsType: string,
  role: string,
): boolean {
  if (permissions.hasOwnProperty(moduleName)) {
    if (permissions[moduleName].all.includes(role)) {
      return true;
    } else {
      return (permissions[moduleName][permissionsType].includes(role));
    }
  }
}
