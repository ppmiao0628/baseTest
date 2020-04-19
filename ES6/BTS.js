class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    setNode(key) {
        let node = new Node(key);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(parent, child) {
        if (child.key < parent.key) {
            if (!parent.left) {
                child.parent = parent;
                parent.left = child;
            } else {
                this.insertNode(parent.left, child);
            }
        } else {
            if (!parent.right) {
                child.parent = parent;
                parent.right = child;
            } else {
                this.insertNode(parent.right, child);
            }
        }
    }
    // 中序遍历
    middleOrde(node){
        if(node) {
            this.middleOrde(node.left);
            console.log(node.key);
            this.middleOrde(node.right);
        }
    }
}

let arr = [3, 5, 7, 2, 55, 53, 217, 8, 4, 34];
let bts = new BinaryTree();
// arr.forEach(i=>{
//     bts.setNode(i);
// });
// console.log(bts);
// bts.middleOrde(bts.root);

// function fibnary(n) {
//     console.log(arguments);
//     if(n==1){
//         return n;
//     } else {
//         return n * arguments.callee(n-1);
//     }
// }
// console.log(fibnary(5));

function fibnaryTail(n) {
    let loop = (i, n)=>{
        console.log(arguments);
        if(n==0){
            return i;
        } else {
            return loop(n*i, n-1);
        }
    }
    loop(1, n)
}
console.log(fibnaryTail(5));

function* clock(){
    while(true){
        console.log('tick');
        yield;
        console.log('tock');
        yield;
    }
}
let c = clock();
c.next()
c.next()
c.next()
c.next()
c.next()