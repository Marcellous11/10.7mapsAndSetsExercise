// Quick Question #1
//  -[1,2,3,4]
// Quick Question #2
//  - ref
// Quick Question #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

[
  [[1, 2, 3], true],
  [[1, 2, 3], false],
];

const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};


  function isVowel(char){
    return 'aeiou'.includes(char)
}   

const vowelCount = (string) => {
const myMap = new Map();
for(let letter of string ){

 let lowerLetter = letter.toLowerCase()
 
    if(isVowel(lowerLetter)){
        if(myMap.has(lowerLetter)){
            myMap.set(lowerLetter, myMap.get(lowerLetter) + 1)
        } else{
            myMap.set(lowerLetter,1);
        }
    }
}
   
return myMap;
};


