// code your solution here
function saturdayFun(activity ="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = 'go to the office'){
 return `This Monday, I will ${activity}.`
}

/*function wrapAdjective (d = "*"){
 let result = function (a= 'a hard worker'){
    return `You are ${d}${a}${d}!`
 }
 return result
}
 */

let wrapAdjective = function (name="*"){
  return  function (wrap="a hard worker"){
      return `You are ${name} ${wrap} ${name}! `
  }
}
console.log(wrapAdjective()());
