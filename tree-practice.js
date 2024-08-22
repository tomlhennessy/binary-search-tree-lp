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
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

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
