const rootList = [
    { id: 1, parent: null, text: '菜单1'},
    { id: 11, parent: 1, text: '菜单1-1'},
    { id: 2, parent: null, text: '菜单2'},
    { id: 21, parent: null, text: '菜单2-1'},
    { id: 22, parent: null, text: '菜单2-2'},
];

function getTreeList(rootList, id, list) {
    for(let item of rootList) {
        if(item.parent === id) {
            list.push(item);
        }
    }
    
    // for(let i of list) {
    //     let children = [];
    //     getTreeList(rootList, i.id, children);
    // }

    return list;
}

console.log(getTreeList(rootList, null, []))