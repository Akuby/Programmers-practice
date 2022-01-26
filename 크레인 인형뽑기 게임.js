function solution(board, moves){ //moves는 타겟 행을 1부터 저장한 배열
  var result = 0;
  const basket = [];
  moves.forEach(order => {
    const poppedDoll = letsPop(board, order-1);
    if(poppedDoll){
      if(poppedDoll == basket[basket.length-1]){
        basket.pop();
        result += 2;
      } else {
        basket.push(poppedDoll);
      }
    }
  });
  return answer;
}

function letsPop(board, order){
  for(let i=0;i<board.length;i++){
    if(board[i][order] !== 0){
      const theDoll = board[i][order];
      board[i][order] = 0;
      return theDoll;
    }
  }
}