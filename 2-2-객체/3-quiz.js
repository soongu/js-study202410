/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

- 객체의 프로퍼티가 있는지 여부 확인하는 문법은 검색해보세요.

*/

let userInfo = {
  userList: [
    {
      account: 'kim1234',
      password: 'kkk1234',
      username: '김두한',
    },
    {
      account: 'park9876',
      password: 'ppp9999',
      username: '박찬호',
    },
    {
      account: 'hong7766',
      password: 'hhh1234',
      username: '홍길동',
    },
    
  ],
};





while (true) {
  // 방금 사용자가 입력한 계정이 위 데이터 안에 있는지 여부

  // 사용자의 입력한 아이디 값
  let inputAccount = prompt('계정을 입력하세요!');

  // 로그인 시도하는 회원의 정보를 백업
  let currentUser = null;

  // 회원가입 데이터를 반복해서 입력한 아이디가 있는지 확인
  for (let user of userInfo.userList) {
  
    if (inputAccount === user.account) {
      // 일단 회원가입은 했다
      currentUser = user;
      break;
    }
  } // end for

  // console.log(currentUser);

  if (currentUser === null) {
    alert('회원가입부터 하세요!');
    continue;
  }

  // 비밀번호 일치검사
  let inputPassword = prompt('비밀번호를 입력하세요!');
  if (inputPassword === currentUser.password) {
    // 이름을 출력해서 로그인 성공 메시지
    alert(`${currentUser.username}님 로그인 성공!`);
    break;
  } else {
    alert('비밀번호가 틀렸습니다!');
  }
}

