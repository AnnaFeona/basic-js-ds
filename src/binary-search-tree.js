const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, value){
      if(!node) {
        let newNode = new Node(value);
        return newNode;
      }

      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addNode(node.left, value);
      }
      if (value > node.data) {
        node.right = addNode(node.right, value)
      }
      return node;
    }

    // this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    // return !!this.find(data);
    return searchInRoot(this.rootNode, data);

    function searchInRoot(node, value){
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }
      if (value < node.data) {
        return searchInRoot(node.left, value);
      } else {
        return searchInRoot(node.right, value);
      }
    }
  }

  find(data) {
    return findInRoot(this.rootNode, data);

    function findInRoot(node, value){
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        return findInRoot(node.left, value);
      } else {
        return findInRoot(node.right, value);
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.rootNode, data);

    function removeNode(node, value){
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data){
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};