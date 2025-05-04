//tutorial no. 67, 26-03-2024
//Title: JavaScript DOM - Children, Parent & Sibling Nodes

//whenever you try to see the childnodes of a document then empty space given in vscode is considered as textnode for example line 6
console.log(document.body.childNodes)
// the output for this will be: (text,divcontainer,text,script)
//lets consider document.body.childnodes as a variable
// u can also access particular childnodes by adding their number infront of child node, starting from 0 ( in our case 0 is text )
let cont = document.body.childNodes[1]
console.log(cont)
//then also the result will be same for that, it will print all the childnodes including spaces ( texts) as a childnode, also we can access the childnode with given variable, given below
console.log(cont.firstChild)
console.log(cont.lastChild) // the first and last child of our div is empty space so it displays texts, to avoid this issue we can directly use firstelementchild, ex given below
console.log(cont.firstElementChild)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes) // this will print the every node inside the firstelementchild
console.log(document.body.firstElementChild.children) // this will print the every html element inside firstelementchild , it will ignore text nodes and comment nodes
console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling) // this will print the children[4] bcz their parents is same and i am asking for his next element sibling 
console.log(document.body.firstElementChild.children[3].previousElementSibling)



