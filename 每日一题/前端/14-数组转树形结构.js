const rootList = [
    { id: 1, parent: null, text: '菜单1'},
    { id: 11, parent: 1, text: '菜单1-1'},
    { id: 2, parent: null, text: '菜单2'},
    { id: 21, parent: 2, text: '菜单2-1'},
    { id: 22, parent: 2, text: '菜单2-2'},
];

function getTreeList(rootList, id, list) {
    for(let item of rootList) {
        if(item.parent === id) {
            list.push(item);
        }
    }
    console.log(list)
    
    for(let i of list) {
        i.children = [];
        getTreeList(rootList, i.id, i.children);
    }

    return list;
}

console.log(getTreeList(rootList, null, []))