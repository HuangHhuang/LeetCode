// 测试用例
const tree = [
  {
      id: 1,
      children: [ { id: 2 }, { id: 3 } ]
  },
  {
      id: 5,
      children: [
          { id: 6 },
          { id: 7, children: [ { id: 10 } ] }
      ]
  }
];

const stack = []

function findItem(tree, target, arr) {
    if(!tree) return false
    // const index = tree.findIndex(({id}) => id === target)
    const index = tree.findIndex(({ id }) => id === target);
    if(index >= 0) {
        arr.push(tree[index].id)
        stack.push(...arr)
        return true
    } else {
        for(let i = 0; i < tree.length; i++) {
            stack.push(tree[i].id)
            if(findItem(tree[i], target, arr)) {
                return true
            } else {
                stack.pop()
            }
        }
        return false
    }
}

(function() {
    findItem(tree, 10);
    console.log(stack)
})

function findItem2(tree, target) {
    const res = [];
    function backtrack(tree, target, path) {
        if(!tree) return;
        const index = tree.findIndex(({ id }) => id === target);
        if(index >= 0) {
            path.push(tree[index].id);
            res.push(...path);
            return;
        }
        for(let i = 0; i < tree.length; i++) {
            path.push(tree[i].id);
            backtrack(tree[i].children, target, path);
            path.pop();
        }
    }
    backtrack(tree, target, []);
    return res;
}

console.log(findItem(tree, 10))

