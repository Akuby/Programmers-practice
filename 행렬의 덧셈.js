function solution(arr1, arr2) {
  var answer = [];
  let i = 0;
  while (i <arr1.length){
      answer.push([]);
      i++;
  }
  for (let j = 0; j<arr1[0].length;j++){
      for (let i = 0; i<arr1.length;i++){
          answer[i][j] = Number(arr1[i][j]) + Number(arr2[i][j]);
        }
  }
  return answer;
}