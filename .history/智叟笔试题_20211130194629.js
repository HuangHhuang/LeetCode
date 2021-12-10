function unique (iterable, selector) {
    var arr = [];
    for(var item in iterable) {
        let key = selector(item);
        let index = arr.indexOf(key);
        if(index === -1) {
            arr.push(key);
        } else {
            arr.splice(index, 1);
            arr.push(key);
            iterable.splice(index, 1);
        }
    }
}

const users = [
    { name: 'aaa', age: 12 },
    { name: 'bbb', age: 13 },
    { name: 'aaa', age: 14 },
]

unique(users, u => u.name)

// console.log(users)

let data = [
    { id: 0, pid: -1, name: '面试' },
    { id: 1, pid: 0, name: '计算机基础知识及原理' },
    { id: 2, pid: 0, name: '前端技能' },
    { id: 3, pid: 0, name: '综合素质' },
    { id: 4, pid: 1, name: '编码' },
    { id: 5, pid: 1, name: '操作系统' },
    { id: 6, pid: 1, name: '网络' },
    { id: 7, pid: 1, name: '数据结构' },
    { id: 8, pid: 2, name: 'js' },
    { id: 9, pid: 2, name: '异步' },
    { id: 10, pid: 2, name: '项目' },
    { id: 11, pid: 3, name: '学习能力' },
    { id: 12, pid: 3, name: '解决问题能力' },
]

/** 构建菜单
    @typedef {{
        id: number
        pid: number
        name: string
        children?: Node[]
    }} Node
    @param {Node[]} nodes
    @returns {Node} 菜单
*/
function build (nodes) {
    // 请实现这个函数，要求时间复杂度 O(n)
    // （可以直接修改结点列表 data 中的各个结点，如增加 children 属性）
    let listOjb = {}; // 用来储存{key: obj}格式的对象
    let treeList = []; // 用来储存最终树形结构数据的数组
    // 将数据变换成{key: obj}格式，方便下面处理数据
    for (let i = 0; i < nodes.length; i++) {
        listOjb[nodes[i]['id']] = nodes[i]
    }
    // 根据pid来将数据进行格式化
    for (let j = 0; j < nodes.length; j++) {
        // 判断父级是否存在
        let haveParent = listOjb[nodes[j][pid]] 
        if (haveParent) {
            // 如果有没有父级children字段，就创建一个children字段
            !haveParent['children'] && (haveParent['children'] = [])
            // 在父级里插入子项
            haveParent['children'].push(nodes[j])
        } else {
            // 如果没有父级直接插入到最外层
            treeList.push(nodes[j])
        }
    }
    return treeList
}

console.log(build(data))
