class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BianryTrees {
    constructor() {
        this.root = null;
    }
    setKey(key) {
        let node = new Node(key);
        if (this.root === null) {
            this.root = node
        } else {
            // this.insertNode(this.root, node)
            let tempNode = this.root;
            while (true) {
                if (node.key > tempNode.key) {
                    if (tempNode.right === null) {
                        tempNode.right = node;
                        break;
                    } else {
                        tempNode = tempNode.right;
                    }
                } else {
                    if(tempNode.left === null) {
                        tempNode.left = node;
                        break
                    } else {
                        tempNode = tempNode.left;
                    }
                }
            }
        }
    }
    insertNode(parent, childe) {
        // 递归实现插入
        if (parent.key > childe.key) {
            if (parent.left === null) {
                parent.left = childe;
            } else {
                this.insertNode(parent.left, childe);
            }
        } else {
            if (parent.right === null) {
                parent.right = childe;
            } else {
                this.insertNode(parent.right, childe)
            }
        }
    }
    preOrder(node) {
        if (node !== null) {
            console.log(node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    middleOrder(node) {
        if (node !== null) {
            this.middleOrder(node.left);
            console.log(node.key);
            this.middleOrder(node.right);
        }
    }
    lastOrder(node) {
        if (node !== null) {
            this.lastOrder(node.left);
            this.lastOrder(node.right);
            console.log(node.key);
        }
    }
}
let arr = [84 ,44 ,45 ,4542, 23, 3, 10, 1, 5, 14, 4, 6, 13];
let bts = new BianryTrees();
arr.forEach(i => {
    bts.setKey(i);
})
console.log(bts.root);
console.log('前序遍历');
bts.preOrder(bts.root);
console.log('中序遍历');
bts.middleOrder(bts.root);
console.log('后序遍历');
bts.lastOrder(bts.root);
