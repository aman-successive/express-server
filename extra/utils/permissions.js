const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head-trainer'],
        read : [ 'trainer'],
        write : ['trainer'],
        delete: [],
    }
}
function hasPermission( moduleName, permissionsType , role ){
    if(permissions.hasOwnProperty(moduleName)){
        if(permissions[moduleName]['all'].includes(role)){
            console.log('true');
        }
        else {
            console.log(permissions[moduleName][permissionsType].includes(role));
        }
    }
}
hasPermission('getUsers','delete','head-trainer');
hasPermission('getUsers','delete','xyz');

