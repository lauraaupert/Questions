// Minimum Height BST Construction

function minHeightBst(array) {
	return makeTree(array, 0, array.length - 1)
}

function makeTree(array, left, right) {
	if (right < left) return null;
	const mid = Math.floor((left + right) / 2);
	const tree = new BST(array[mid]);
	tree.left = makeTree(array, left, mid - 1);
	tree.right = makeTree(array, mid + 1, right);
	return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
