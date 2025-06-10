const posts = [
  {
    id: 1,
    title: '첫 번째 블로그 포스트',
    content: '이것은 첫 번째 블로그 포스트의 내용입니다. React로 블로그를 만드는 방법에 대해 알아봅시다.',
    author: '홍길동',
    createdAt: '2023-01-01',
    comments: [
      {
        id: 1,
        content: '좋은 글이네요!',
        author: '김철수',
        createdAt: '2023-01-02'
      },
      {
        id: 2,
        content: '많이 배웠습니다.',
        author: '이영희',
        createdAt: '2023-01-03'
      }
    ]
  },
  {
    id: 2,
    title: 'React Hooks 사용법',
    content: 'React Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해줍니다.',
    author: '홍길동',
    createdAt: '2023-01-10',
    comments: [
      {
        id: 3,
        content: 'Hooks 정말 유용하죠!',
        author: '박지민',
        createdAt: '2023-01-11'
      }
    ]
  }
];

export default posts; 