function solution(lottos, win_nums) {
  //0이 아닌 상수 비교 후 temp에 저장
  var temp = (lottos.filter(x=> win_nums.includes(x)));
  //count에 0의 개수 저장
  var count = 0;
  for (let i=0;i<lottos.length;i++) {
      if(lottos[i] == '0') {
          count++;
      }
  }
  var answer = [];
  //최대값 구하기
  var m = 7 - ((temp.length) + count);
  if (m == 7) {
      m = 6;
  }
  //최소값 구하기
  var n = 7 - (temp.length);
  if(n == 7) {
      n = 6;
  }   
  answer.push(m); 
  answer.push(n);
  return answer;
  }