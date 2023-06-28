function pigIt(str){
    const strArray = str.split(" ");
    const res = [];
   
    for (let i = 0; i < strArray.length; i += 1){
        
        res.push(strArray[i].slice(1) + strArray[i].slice(0, 1) + "ay")
     
    }
   
    return res;
}

console.log(pigIt('Hello world !'));

