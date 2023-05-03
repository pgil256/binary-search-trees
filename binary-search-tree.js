class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    var curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (curr.left === null){
          curr.left = new Node(val);
          return this;
        } else {
        curr = curr.left;
        }
      } else if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new Node(val);
          return this;
        } else {
          curr= curr.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr= this.root) {
    if (this.root ===null){
      this.root = new Node(val);
      return this;
    }

    if(val < curr.val) {
      if(curr.left === null){
        curr.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curr.left);
    } else{
      if (curr.right === null){
        curr.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curr.right);
      }
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    let finished = false;

    if(val === currNode) return currNode;

    while (currNode && !finished){
      if(val < currentNode.val){
        currentNode = currentNode,left;
      } else if (val > currNode.val ){
        currentNode = currentNode.right;
      } else {
        finished = true;
      }
    }

    if(!finished) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
    if(this.root === null) return undefined;

    if(val< curr.val) {
      if(curr.left === null) return undefined;
      return this.findRecursively(val, curr.left);
    } else if (val > curr.val) {
      if (curr.right === null) return undefined;
      return this.findRecursively(val, curr.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let curr = this.root

    function traverse(node){
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(curr);
    function  data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let curr = this.root

    function traverse(node){
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(curr);
    function  data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let curr = this.root

    function traverse(node){
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }
    traverse(curr);
    function  data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = []; 
    let data = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left) {
        queue.push(node.left);
      } 
      if(node.right){
        queue.push(node.right);
      }
    }
    return data;
  }

}

module.exports = BinarySearchTree;
