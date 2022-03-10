function solution(record) {

  let answer = [];
  let user = [];
  let userList = [];

  for (let i = 0; i < record.length; i++) {
    user.push(record[i].split(' '));
  }

  for (let i = user.length - 1; i >= 0; i--) {
    if (!(userList.includes(user[i][1]))) { //new Id
      let newId = user[i][1];
      userList.push(newId);
      let latestName = user[i][2];
      for (let j = i - 1; j >= 0; j--) {
        if (user[j][1] == newId) {
          user[j][2] = latestName;
        }
      }
    }
  }

  for (let i = 0; i < user.length; i++) {
    if (user[i][0] == 'Enter') {
      answer.push(`${user[i][2]}님이 들어왔습니다.`);
    } else if (user[i][0] == 'Leave') {
      answer.push(`${user[i][2]}님이 나갔습니다.`);
    }
  }
  console.log(answer);
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan", "Enter uid2345 Hyewon", "Change uid2345 Hye", "Enter u49283 asdf"]);