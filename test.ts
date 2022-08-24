// 在此处添加您的代码
function traverse(node: btree.TreeNode) {
    if (node == null) {
        // console.log("null")
        return;
    }
    
    // console.log(node.val)
    console.log(" --------- " + node.val + " --------- ")

    traverse(node.left);
    // console.log(" --------- " + node.val + " --------- ")
    traverse(node.right);
}

let values = [5, 4, 2, 1, 3,6,7].sort()
let root = btree.buildTree(values);
// traverse(root)

search(root, 4)
search(root, 1)

search(root, 8)


function search(root : btree.TreeNode, target:number) {

    if (root == null) {
        console.log("NOT FOUND!")
        return;
    } 

    if (root.val == target) {
        console.log(root.val)
        return;
    }

    if (root.val < target) {
        search(root.right, target)
    } else {
        search(root.left, target)
    }
    
}
