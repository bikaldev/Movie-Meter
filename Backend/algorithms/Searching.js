const fs = require('fs');


function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const BST = class {
    binaryTree = {};
    avail = 0;
    constructor(binaryTree) {
        this.binaryTree = binaryTree;
    }

    loadFromFile(filepath) {
        this.binaryTree = require(filepath);
        this.avail = this.binaryTree["avail"];
        delete this.binaryTree["avail"];
    }

    add(item) {
        item.data = String(item.data).toLowerCase();
        this.addtoTree("root", item);
    }

    addtoTree(node, item) {
        let nodeId = node;
        node = this.binaryTree[node];
        if(node === undefined && Object.keys(this.binaryTree).length === 0) {
            let newNode = new Node(item, null, null);
            this.binaryTree.root = newNode;
            return;
        }

        if(node === undefined) {
            let newNode = new Node(item, null, null);
            this.binaryTree[String(this.avail)] = newNode;
            this.avail++;
            return;
        }

        if(node.data.data > item.data) {
            if(node.left === null) {
                this.binaryTree[nodeId].left = this.avail;
            }
            this.addtoTree(node.left, item);
        } else if(node.data.data <= item.data) {
            if(node.right === null) {
                this.binaryTree[nodeId].right = this.avail;
            }
            this.addtoTree(node.right, item);
        } else {
            if(node.left === null) {
                this.binaryTree[nodeId].left = this.avail; 
                this.addtoTree(node.left, item);
            } else {
                this.binaryTree[nodeId].right = this.avail;
                this.addtoTree(node.right, item);
            }
        }
    }

    async saveToJSON(filepath) {
        this.binaryTree["avail"] = this.avail;
        let jsonContent = JSON.stringify(this.binaryTree);
        // console.log(jsonContent)
        fs.writeFileSync(filepath, jsonContent, (err)=> {
            // console.log('Error Occured while saving the file');
            // throw err;
        });
    }

    traverse(node, item) {
        let nodeId = node;
        node = this.binaryTree[nodeId];
        if(node === undefined) {
            console.log(nodeId);
            console.log("Can't find data!");
            return null;
        }
        if(node.data.data > item) {
            // console.log(node.data);
            return this.traverse(node.left, item);
        } else if(node.data.data < item) {
            // console.log(node.data);
            return this.traverse(node.right, item);
        } else {
            // console.log(nodeId)
            // console.log(node.right, node.left)
            return node.data;
        }
    }
    
    search(item) {
        item = String(item).toLowerCase();
        return this.traverse("root", item);
    }

}


module.exports = BST;