const data = require('../data/filmData.json');
const BST = require('../algorithms/Searching');
// const data = require('../data/data.json')

binTree = new BST({});

for(let i = 0; i < Object.keys(data).length-1; i++) {
    binTree.add({data: data[String(i)].title, id: i});
}

// console.log(binTree.avail)
// console.log(binTree.binaryTree)
// binTree.add({data: 'the godfather',id: 1000000});

binTree.saveToJSON('../data/binaryTitleTree.json')

result = binTree.search('the godfather');

console.log(result);