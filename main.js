// Find Grandparent in the Tree

// Write a function that takes in the root of the tree structure and a target value and returns the value of that target's 
// grandparent.


// Examples

// Example 1
// let tree1 = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 }]
//         },
//         {
//             value: 3,
//             children: []
//         }
//     ]
// }
// whoIsTheGrandParent(tree1, 4) // should return 1
// whoIsTheGrandParent(tree1, 3) // should return undefined
 

// Example 2
 
// let tree2 = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                      value: 33,
//                      children: []
//                 }
//             ]
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 5,
//                     children: [
//                             {
//                                 value: 8,
//                                 children: []
//                             }
//                     ]
//                 }
//             ]
//         }]
// }
function whoIsTheGrandParent(tree, target){
let parent=tree;
// console.log("parent="+parent.value);
for(let i=0;i<parent.children.length;i++){
  if(parent.children[i].children.length===0){
    return undefined;
  }
  for(let j=0;j<parent.children[i].children.length;j++){
    if(parent.children[i].children[j].value===target){
      return parent.value;
    }else{
      let result=whoIsTheGrandParent(parent.children[i],target);
      if(result!==undefined){
        return result;
      }
  }
}
}
}
let tree1 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                }]
        },
        {
            value: 3,
            children: []
        }
    ]
}
let tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                }]
        },
        {
            value: 3,
            children: [
                {
                    value: 5,
                    children: []
                }
            ]
        }]
}
let tree3 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                },
                {
                     value: 33,
                     children: []
                }
            ]
        },
        {
            value: 3,
            children: [
                {
                    value: 5,
                    children: [
                            {
                                value: 8,
                                children: []
                            }
                    ]
                }
            ]
        }]
}
console.log(whoIsTheGrandParent(tree1, 4)) ;// should return 1
console.log(whoIsTheGrandParent(tree1, 3)) ;// should return undefined
console.log(whoIsTheGrandParent(tree1, 1)) ;// should return undefined
console.log(whoIsTheGrandParent(tree1,2)) ;// should return undefined

console.log(whoIsTheGrandParent(tree2, 5)); // should return 1
console.log(whoIsTheGrandParent(tree2, 4)); // should return 1
console.log(whoIsTheGrandParent(tree2, 1));// should return undefined
console.log(whoIsTheGrandParent(tree2, 2)); // should return undefined
console.log(whoIsTheGrandParent(tree2, 3)); // should return undefined

console.log(whoIsTheGrandParent(tree3, 1));// should return undefined
console.log(whoIsTheGrandParent(tree3,2)) ;// should return undefined
console.log(whoIsTheGrandParent(tree3, 3)); // should return undefined
console.log(whoIsTheGrandParent(tree3, 4)); // should return 1
console.log(whoIsTheGrandParent(tree3, 33));// should return 1
console.log(whoIsTheGrandParent(tree3, 5)); // should return 1
console.log(whoIsTheGrandParent(tree3, 8)); // should return 3
console.log(whoIsTheGrandParent(tree3, 10)); // should return undefined
