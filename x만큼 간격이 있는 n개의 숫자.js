function solution(x, n) {
    var answer = [];
    var value = parseInt(x);
    for(let i=0;i<n;i++){
        answer.push(value)
        value += x
    }
    return answer;
}
