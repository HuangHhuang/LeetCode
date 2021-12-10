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
    let listOjb = {};
    let treeList = [];
    for (let i = 0; i < nodes.length; i++) {
        listOjb[nodes[i]['id']] = nodes[i]
    }
    for (let j = 0; j < nodes.length; j++) {
        let haveParent = listOjb[nodes[j]['pid']] 
        if (haveParent) {
            !haveParent['children'] && (haveParent['children'] = [])
            haveParent['children'].push(nodes[j])
        } else {
            treeList.push(nodes[j])
        }
    }
    return treeList
}

// console.log(build(data))

function search(arr,key) {
    var low=0,
        high=arr.length-1;      //定义一个最高点和最低点
    while (low<=high){          //当最高点大于最低点的时候
        var mid=Math.floor((high+low)/2);   //挑一个中间数
        if (arr[mid]==key){return mid;}     //如果中间数等于查找的值，返回这个中间数的位置
        else if (arr[mid]<key){
            low=mid+1;      //中间值小于查找的值的话，将查找的数列段的最低点变成中点+1
        }
        else if (arr[mid]>key){
             high=mid-1;    //大于的话最高点变成中点-1
        }
        else {
            return -1;      //否则返回-1
        }
    }
}

console.log(search([1, 3, 6, 6, 8, 12], 0))
