# front-end

프엔

### 설정 방법

- 1. packages 설치

```
npm i
npm run dev
```

- 2. 루트경로에 .env.local 파일 생성

- 3. 코드 붙여넣기

next는 라우팅이 파일 구조를 따라가서 src/app 안에 폴더는 그대로 라우팅이 됩니다.

- app 안에는 라우트 관련 파일을 넣습니다.

- components에는 페이지 안에 사용할 컴포넌트를 작성합니다.

- constants에는 재사용되는 상수를 넣습니다.

- hooks에는 재사용성 있는 훅들을 넣습니다.

- services에는 외부 api에 관련된 요청들을 넣습니다. firebase 관련된 파일들은 services/firbase 폴더에 정리하시면 될 것 같습니다.

- types에는 재사용성 있는 types를 정리합니다.

- utils에는 자주 사용되는 유틸성 함수들을 작성합니다.

폴더 안에 .txt 파일들은 github에 올리기 위해 작성된 것이며, 해당 폴더 안에 한 개 이상의 파일이 생성될 경우에 삭제 부탁드립니다.

참고 사이트 : https://miriya.net/blog/cliz752zc000lwb86y5gtxstu

### NextJS 13 서버 async 컴포넌트 렌더링 예외 처리

https://curryyou.tistory.com/529

#### 원인

Next.js 13의 서버 컴포넌트를 async 함수로 사용하면 JSX가 아닌 Promise를 반환한다.

React 컴포넌트는 JSX만 반환하는 것으로 이해하는 Typescript가 아직 이 케이스를 커버하지 못해서 그렇다.

Next.js 팀에서 이미 인지하고 있는 타입스크립트 이슈이고 조만간 해결될 예정이라고 한다.

#### 해결책

일단 임시 해결책은 아래 주석을 해당 서버 컴포넌트 위에 붙여 주는 것이다.

{/_ @ts-expect-error Async Server Component _/}

```tsx
export default async function ServerComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ServerComponent data={postData} />
    </>
  );
}
```
