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
            console.log("res:" + res)
            console.log("path:" + path)
            path.pop();
        }
    }
    backtrack(tree, target, []);
    return res;
}

console.log(findItem2(tree, 10))

