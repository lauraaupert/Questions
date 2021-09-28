// flatten Binary Tree

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function flattenBinaryTree(root) {
    let inOrderNodes = inOrderTraverse(root, []);

    for (let i = 0; i < inOrderNodes.length - 1; i++) {
        const leftNode = inOrderNodes[i];
        const rightNode = inOrderNodes[i + 1];
        leftNode.right = rightNode;
        rightNode.left = leftNode;
    }
    return inOrderNodes[0];
}

function inOrderTraverse(root, array) {
    if (root !== null) {
        inOrderTraverse(root.left, array);
        array.push(root);
        inOrderTraverse(root.right, array);
    }
    return array;
}