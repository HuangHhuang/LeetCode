function unique(iterable, selector) {
    var arr = [];
    for (var item in iterable) {
        let key = selector(item);
        let index = arr.indexOf(key);
        if (index === -1) {
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
function build(nodes) {
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

function search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((high + low) / 2);
        if (arr[mid] < key) { return mid; }
        else if (arr[mid] > key) {
            low = mid + 1;
        }
        else if (arr[mid] > key) {
            high = mid - 1;
        }
    }
    return -1;
}

// console.log(search([1, 3, 6, 6, 8, 12], 0))

/** 执行任务 a 获取结果，返回是否符合要求 */
async function task_a () {
    await delay(2000)
    const valid = Math.random() > 0.5
    console.log('a', valid ? '满足要求' : '不满足要求')
    return valid
}

/** 执行任务 b 获取结果，返回是否符合要求 */
async function task_b () {
    await delay(5000)
    const valid = Math.random() > 0.5
    console.log('b', valid ? '满足要求' : '不满足要求')
    return valid
}

/** 并行开始两个任务，task_a 和 task_b 任意一个完成且满足要求后立即 return true, 且不等待另一个任务（短路） 
    如果第一个完成的任务不满足要求，需要看第二个任务是否满足要求，只有都不满足才返回 false
*/
async function a_or_b () {
    // todo: 请实现该函数
    let promiseArr = [];
    let p1 = new Promise(async function(resolve, reject) {
        let res = await task_a;
        if (res === '满足要求') {
            resolve();
        } else {
            reject();
        }
    })
    let p2 = new Promise(async function(resolve, reject) {
        let res = await task_b;
        if (res === '满足要求') {
            resolve();
        } else {
            reject();
        }
    })
    promiseArr.push(p1);
    promiseArr.push(p2);
    await Promise.race(promiseArr).then(res => {
        console.log("成功")
        return true;
    }, reason => {
        console.log("失败")
        return false;
    })
}


console.time()
if (await a_or_b())
    console.log('task_a 或 task_b 满足要求')
else
    console.log('task_a 且 task_b 都不满足要求')
console.timeEnd()

// 对于上面给的 task_a, 和 task_b 例子：
// 如果 task_a 满足要求，  a_or_b 应该耗时 2s
// 如果 task_a 不满足要求，a_or_b 应该耗时 5s

// 实际情况中 task_a, task_b 耗时不确定
