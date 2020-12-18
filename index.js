

 function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
   // (i + 1).toString();
  }
  return lis;
}


function deepestChild() {
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0];
  
  while (nextNode) {
    gNode = nextNode;
    nextNode = gNode.children[0];
  }
  return (gNode);
}






/*
function deepestChild(){
  let divs = document.getElementById('grand-node');
  let deepestChild = divs.children;
 
  while(deepestChild){
    let deepestChild = deepestChild.children;
      
  }
  
  return console.log(deepestChild.innerHTML);
}
//let element = document.getElementById('grand-node'); var innertext = element.lastElementChild.innerText;
https://codepen.io/Saekit/pen/mGXmRe






/*function deepestChild(){
 let element = document.getElementById('grand-node');
  while(element.hasChildNodes()){
    element = element.firstChild;
  }
  return console.log(element.innerHTML);
}
let element = document.getElementById('grand-node'); var innertext = element.lastElementChild.innerText;

*/


/*function deepestChild(){
  let deepestChild = document.querySelector('div #grand-node').lastElementChild;
  
  for(let i = 0; i < divs.length; i++){
    if(divs[i] === div[length - 1]){
      return console.log(divs[i].innerHTML);
    }
  }
   

  
}
/*
 
  //while(deepestChild){
  //if(deepestChild.firstElementChild){
  //  return console.log(deepestChild.innerHTML);
  //}
  
//  deepestChild = deepestChild.firstElementChild;//
//}

//}
/* 
let divsChild = divs.children;

for(let i = 0; i < divsChild.length; i++){
  if(!divsChild[i].children){
     return divsChild[i].innerHTML;
  }
  else{
    return divsChild.innerHTML;
  }
}
}
/*

  var el = document.getElementById('div-01').nextElementSibling;
  console.log('Siblings of div-01:');
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;

/*
for(i = 0; i < divsChild.length; i++){
  divsChild[i] = 
}
}

/*while(divsChild){
  if(!divsChild.children){
    return divsChild.innerHTML;
  }
  else{
    divsChild = divChild.children;
  }
}
}*/
