function pigIt(str){
    const strArray = str.split(" ");
    const res = [];
   
    for (let i = 0; i < strArray.length; i += 1){
        
        res.push(strArray[i].slice(1) + strArray[i].slice(0, 1) + "ay")
     
    }
   
    return res;
}

console.log(pigIt('Hello world !')); /*return [ 'elloHay', 'orldway', '!ay' ]*/

----------------------------------------------------------------------------------------------------

function getDoubleNum(array, target) {   
const resArray = [];

  array.reduce((acc, item) => {
       acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
       if (acc[item] <= target) {
           resArray.push(item);
       }
       return acc;
       
    }  
       , {});
   
    return resArray;
       
}

console.log(getDoubleNum([1, 2, 3, 5, 2, 5, 1, 2, 5, 2, 4, 2, 4], 2)); /*return [1, 2, 3, 5, 2,  5, 1, 4, 4]*/


--------------------------------------------------------------------------------------------------------------
    function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
};

console.log(arrayDiff([1,2,2,2,3],[2]));   /* [1,3]*/

----------------------------------------------------------------------------------------------------------------
    1) function validBraces(braces){
  const matches = { '(':')', '{':'}', '[':']' };
  const stack = [];
  let currentChar;

  for (let i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

2) function validBraces(braces){
  const bracesHash = {'(': ')', '[': ']', '{': '}'};
  const bracesStack = [];

  for (const brace of braces) {
    if (bracesHash[brace])
      bracesStack.push(brace);
    else if (brace !== bracesHash[bracesStack.pop()])
      return false;
  }

  return bracesStack.length === 0;
}


console.log(validBraces("(){}[]")); // return true

----------------------------------------------------------------------------------
function camelCase(str) {
  const result=[];
let replaceStr=str.replaceAll("_", " ");
replaceStr=replaceStr.replaceAll("-", " ").split(" ");
for(let i=0; i<replaceStr.length; i+=1){
  result.push(replaceStr[i][0].toUpperCase()+replaceStr[i].slice(1));
}

 return result.join("");
};


console.log(camelCase("dfg_ff-gfgh")); //return DfgFfGfgh

---------------------------------------------------------------------------------------------------
    function toWeirdCase(string){

return string.split(" ").map(item =>{
  return item.split("").map((item,index) => {
    return index %2 === 0?item.toUpperCase():item.toLowerCase();
  }).join("");
}).join(" ");
};

console.log(toWeirdCase("This is a test"));//return ThIs Is A TeSt

----------------------------------------------------------------------------------------------------------
    var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  const resArray=[]; 
  
  for(let i=0; i<iterable.length; i+=1){
    if(iterable[i]!=iterable[i+1]){
      resArray.push(iterable[i]);
    }
  }
  return resArray;
};


console.log(uniqueInOrder('AAAABBBCCDAABBB'));//return [ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder([1,2,2,3,3]));//return [ 1, 2, 3 ]

-----------------------------------------------------------------------------------------------------------------
    function sortArray(array) {
  
  const odds = array.filter(item => item %2 !==0).sort((a,b)=>a-b);

  const result = array.map(item => {
    if(item %2 !==0){
      item = odds.shift();
    }
    return item;
  })

return result;
  
};

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));//return 1, 8, 3, 6, 5,4, 7, 2, 9, 0


