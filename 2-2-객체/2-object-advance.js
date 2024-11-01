
// 커뮤니티 게시판 게시글
let article1 = {
  title: '요새 재밌는 영화 추천좀...',
  content: '요즘에 재밌는 영화를 보고 싶은데 찾기가 어렵네요',
  writer: {
    name: '잔망루피',
    account: 'loopy1234',
    joinDate: '2020-11-30',
    grade: 'GOLD',
    emailVerify: true
  },
  viewCount: 14,
  likeCount: 3,
  dislikeCount: 30,
  regDate: '2024-11-01',
  hashTags: ['질문', '취미']
};


console.log(article1.title);
console.log(typeof article1.writer.account);
console.log(article1.writer.emailVerify);

// 객체 프로퍼티 수정하기
console.log('=================');

article1.title = '제목없음!';
article1.writer.grade = 'VIP';


// 프로퍼티 동적 추가: 실행중에 프로퍼티 추가하기
article1.isAdmin = false;

// 프로퍼티 삭제
delete article1.dislikeCount;

console.log(article1);

//객체의 중첩구조
//예시 : 게시판


let articles = {
  totalCount: 25578, //총 게시물 수
  admin: 'abc1234', //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [
    // 게시물 목록
    {
      bno: 3, //글번호
      title: '가위바위보', //글제목
      writer: '김짱껨뽀', //작성자
      content: '다덤벼 ^^', //글내용
      viewCount: 53, //조회수
      recomm: 10, //추천수
      regDate: '21-12-07', //작성일자
    },
    {
      bno: 2, //글번호
      title: '노는게', //글제목
      writer: '뽀로로', //작성자
      content: '제일조와~~~', //글내용
      viewCount: 253, //조회수
      recomm: 11, //추천수
      regDate: '21-12-06', //작성일자
    },
    {
      bno: 1, //글번호
      title: '아멘', //글제목
      writer: '개신교신자', //작성자
      content: '할렐루야', //글내용
      viewCount: 23, //조회수
      recomm: 5, //추천수
      regDate: '21-12-05', //작성일자
    },
  ],
};

console.log('================');


console.log(articles.articleList.length);
console.log(articles.articleList[2].title);

console.log('==================');

for (let obj of articles.articleList) {
  console.log(obj.writer);
}
