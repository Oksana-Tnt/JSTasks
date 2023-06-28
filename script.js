function pigIt(str){
    const strArray = str.split(" ");
    const res = [];
   
    for (let i = 0; i < strArray.length; i += 1){
        
        res.push(strArray[i].slice(1) + strArray[i].slice(0, 1) + "ay")
     
    }
   
    return res;
}

console.log(pigIt('Hello world !'));

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

console.log(getDoubleNum([1, 2, 3, 5, 2, 5, 1, 2, 5, 2, 4, 2, 4], 2));

