// Invert Binary Tree

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(tree) {
    if (tree === null) return;

    let left = tree.left;
    let right = tree.right;
    tree.left = right;
    tree.right = left;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}
