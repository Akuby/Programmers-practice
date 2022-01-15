function solution(s) {
  var temp = s; 
  temp = temp.replace(/zero/g,'0');
  temp = temp.replace(/one/g,'1');
  temp = temp.replace(/two/g,'2');
  temp = temp.replace(/three/g,'3');
  temp = temp.replace(/four/g,'4');
  temp = temp.replace(/five/g,'5');
  temp = temp.replace(/six/g,'6');
  temp = temp.replace(/seven/g,'7');
  temp = temp.replace(/eight/g,'8');
  temp = temp.replace(/nine/g,'9');
  temp = Number(temp);
  return temp;
}
/*
Best solution 
function solution(s) {
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine']
    var answer = s;
    
    for (let i=0; i<numbers.length; i++){
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}
*/
