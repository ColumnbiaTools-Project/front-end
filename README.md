# front-end
프엔

### 설정 방법
+ 1. packages 설치
```
npm i 
npm run dev
```

+ 2. 루트경로에 .env.local 파일 생성

+ 3. 코드 붙여넣기

next는 라우팅이 파일 구조를 따라가서 src/app 안에 폴더는 그대로 라우팅이 됩니다.

따라서 app 안에는 라우팅 폴더만 작성하고, 
페이지 안에 사용할 컴포넌트는 src/clientComp, src/serverComp로 분류했습니다.

재사용성 높은 타입은 src/types폴더에 정리하셔서 import 하면 될것같습니다.
