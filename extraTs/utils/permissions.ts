import { permissions } from '../constants';
export default function hasPermission(
  moduleName: string,
  permissionsType: string,
  role: string,
): void {
  if (permissions.hasOwnProperty(moduleName)) {
    if (permissions[moduleName].all.includes(role)) {
      console.log('true');
    } else {
      console.log(permissions[moduleName][permissionsType].includes(role));
    }
  }
}
