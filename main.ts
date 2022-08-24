namespace btree {

    export class TreeNode {
        val:number;
        left:TreeNode;
        right:TreeNode;
    }

    export class Tree {

        constructor(){}

    }

    export function buildTree(values :number[]) : TreeNode {
        if (values.length == 0) {
            return null;
        }

        let mid = Math.floor(values.length / 2)

        let root = new TreeNode()
        root.val = values[mid]
        
        if (mid > 0) {
            let left = values.slice(0, mid)
            root.left = buildTree(left)
        }
        if (mid  < values.length) {
            let right = values.slice(mid + 1)
            root.right = buildTree(right);
        }
        return root;

    }

}
