process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var arr = "";
    
    for (var j = 0; j < a; j++) {
        arr += '*';
        }
    for (var i = 0; i < b; i++) {
        console.log(arr)
    }

});
/*
전처리가 다 되어있었다. n은 data를 공백 기준으로 나눠 배열화 해주었고
a와 b에 각각 해당되는 값을 할당해준 것을 확인했다.

다른 코드를 보니, repeat을 사용해 for문을 줄였다 :
  arr = '*'.repeat(a);

*/