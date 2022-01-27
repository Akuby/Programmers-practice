function solution(numbers, hand) {
    var answer = '';
    const keypad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    };
    let rh = keypad['#'];
    let lh = keypad['*'];
    
    function cal(hp, op){
        let a = Math.max(hp[0], op[0]) - Math.min(hp[0], op[0]);
        let b = Math.max(hp[1], op[1]) - Math.min(hp[1], op[1]);
        return a+b;
    }
    
    for (let i = 0; i < numbers.length; i++){
        let target = numbers[i];
        if (target == 1 || target == 4 || target == 7){ //1, 4, 7 계산
            lh = keypad[target];
            answer += 'L';
        } else if (target == 3 || target == 6 || target == 9){ //3, 6, 9 계산
            rh = keypad[target];
            answer += 'R';
        } else { //2, 5, 8, 0 계산
            const leftD = cal(lh,keypad[target]);
            const rightD = cal(rh,keypad[target]);
            
            if (leftD > rightD){ //왼손이 더 가까움
                rh = keypad[target];
                answer += 'R';
            } else if (rightD > leftD){ //오른손이 더 가까움
                lh = keypad[target];
                answer += 'L';
            } else { //거리가 같음
                if (hand === 'right'){
                    rh = keypad[target];
                    answer += 'R';
                } else {
                    lh = keypad[target];
                    answer += 'L';
                }
            }
        }
        
    }
    
    
    return answer;
    
}
