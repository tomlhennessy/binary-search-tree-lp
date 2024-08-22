const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (!rootNode) return null; // handle empty tree
  let currentNode = rootNode;
  while (currentNode.left !== null) {
    currentNode = currentNode.left; // keep moving left
  }
  return currentNode.val;
}

function findMaxBST (rootNode) {
  if (!rootNode) return null; // handle empty tree
  let currentNode = rootNode;
  while (currentNode.right !== null) {
    currentNode = currentNode.right; // keep moving right
  }
  return currentNode.val;
}

function findMinBT (rootNode) {
  if (!rootNode) return null;
  let minVal = rootNode.val;

  function traverse(node) {
    if (!node) return;
    if (node.val < minVal) minVal = node.val;
    traverse(node.left);
    traverse(node.right);
  }

  traverse(rootNode);
  return minVal;
}

function findMaxBT (rootNode) {
  if (!rootNode) return null;
  let maxVal = rootNode.val;

  function traverse(node) {
    if (!node) return;
    if (node.val > maxVal) maxVal = node.val;
    traverse(node.left);
    traverse(node.right);
  }

  traverse(rootNode);
  return maxVal;
}

function getHeight (rootNode) {
  if (!rootNode) return -1; // an empty tree has height -1
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree (rootNode) {
  function checkBalance(node) {
    if (!node) return 0; // height of null node is 0
    const leftHeight = checkBalance(node.left);
    const rightHeight = checkBalance(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1; // unbalanced tree
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return checkBalance(rootNode) !== -1;
}

function countNodes (rootNode) {
  if (!rootNode) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode (rootNode, target) {
  if (!rootNode || rootNode.val === target) return null;

  function traverse(node) {
    if (!node) return undefined;
    if (node.left && node.left.val === target || node.right && node.right.val === target) {
      return node;
    }
    return traverse(node.left) || traverse(node.right);
  }

  return traverse(rootNode);
}

function inOrderPredecessor (rootNode, target) {
  let prev = null;

  function traverse(node) {
    if (!node) return null;
    let leftResult = traverse(node.left);
    if (leftResult !== null) return leftResult;

    if (node.val === target) return prev;
    prev = node.val;

    return traverse(node.right);
  }

  return traverse(rootNode);
}

function deleteNodeBST(rootNode, target) {
  if (!rootNode) return undefined;

  if (target < rootNode.val) {
    rootNode.left = deleteNodeBST(rootNode.left, target);
  } else if (target > rootNode.val) {
    rootNode.right = deleteNodeBST(rootNode.right, target);
  } else {
    // node found
    if (!rootNode.left) return rootNode.right; // no left child
    if (!rootNode.right) return rootNode.left; // no right child

    // node with two children: get the in-order successor (smallest in the right subtree )
    let successor = rootNode.right;
    while (successor.left !== null) {
      successor = successor.left;
    }
    rootNode.val = successor.val;
    rootNode.right = deleteNodeBST(rootNode.right, successor.val);
  }
  return rootNode;

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
