function solution(id_list, report, k) {
  const set = new Set(report);
  const uniqueRep =  [...set];
  const bR = [];
  const banlist = [];

  for (var i=0;i<uniqueRep.length;i++) {
    for (var j=0;j<id_list.length;j++) {
      if (uniqueRep[i].endsWith(id_list[j])) {
        bR.push(id_list[j]);
      }
    }
  }
  
const result = {};
bR.forEach((x) => {
  if(result[x]) {
    result[x] = result[x] + 1;
  }else{
    result[x] = 0 + 1;
  }
});
  
/*예상 결과값 
result = {"frodo":2, "neo":2, "muzi":1}
value값이 k 이상인 key값을 찾고, 
report에서 key값으로 끝나는 원소를 신고한 id를 찾는다.
*/


  

  
  
  // var answer = [];
  // return answer;
}