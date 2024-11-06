## Getting Started

blockpick
First, run the development server:


```bash
npm run dev
```

## 디렉토리 구조

```text
source
├── .husky
├── .storybook
├── app
│    ├── blockpick
│    │    ├── [blockpickId]
│    │    │    ├── board
│    │    │    │    └── page.tsx # 블록픽 게임
│    │    │    ├── reports
│    │    │    │    └── page.tsx # 블록픽 현황
│    │    │    └── page.tsx # 블록픽 상세 메인
│    │    └── page.tsx # 블록픽 목록
│    ├── daily-rewards
│    │    └── page.tsx # 출석체크 페이지
│    ├── forgot-password
│    │    └── page.tsx # 비밀번호 찾기 페이지
│    ├── help
│    │    ├── announcements
│    │    │    └── page.tsx # 공지사항 페이지
│    │    ├── contact-us
│    │    │    └── page.tsx # 1:1 문의 페이지
│    │    └── faq
│    │         └── page.tsx # FAQ 페이지
│    ├── login
│    │    └── page.tsx # 로그인 페이지
│    ├── more
│    ├── notifications
│    │    └── page.tsx # 알람 페이지
│    ├── policy
│    │    ├── privacy
│    │    │    └── page.tsx # 개인정보 처리방침 페이지
│    │    ├── terms
│    │    │    └── page.tsx # 서비스 이용약관페이지
│    │    └── page.tsx # 약관 및 정책 페이지
│    ├── settings
│    │    ├── delete
│    │    │    └── page.tsx # 회원 탈퇴 페이지
│    │    ├── notifications
│    │    │    └── page.tsx # 알림 설정 페이지
│    │    └── profile
│    │         └── page.tsx # 프로필 수정 페이지
│    ├── signup
│    │    └── page.tsx # 회원가입 페이지
│    └── page.tsx # 메인 페이지
├── components # 컴포넌트 모음 @/components/*로 접근 가능
├── images # 에셋 모음 @/images/*로 접근 가능
├── public
├── stores
├── stories
├── types
├── utils
├── .editorconfig
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 인증

서버에서 받은 토큰을 쿠키에 저장하는 방식

회원가입 혹은 로그인 시 쿠키를 설정하고 모든 페이지에서 쿠키의 토큰을 통해 로그인 정보를 받아오는 형식

현재 쿠키명은 `user-token`

## 픽 저장 방식

블록픽 특허로 기획 자료를 참조. 요약하면 다음과 같다.
블록 선택 -> 암호화 -> 서버에 전송 -> 로컬에 저장 -> 체크포인트 기간에 접속시 서버에 복호화할 수 있는 정보 전달

### 1. 블록 선택

원하는 블록을 픽하는 단계.

### 2. 암호화

원하는 블록을 선택하였다면 블록 정보를 암호화한다.

암호화 알고리즘은 `AES-GCM`을 채택하였음.

암호화할 값은 블록 선택 배열임. 예를들어 2 x 2 x 4 보드인데, 1번째 2번째, 10번째를 선택했다면 `[0, 1, 9]`가 된다.

### 3. 서버에 전송

암호화된 정보를 서버에 전송한다. 이 때 전송은 BP 차감을 위한 내용이다.

### 4. 로컬에 저장

정보 전송을 성공했으면 로컬에 픽 정보를 저장한다.

- 암호화 키
- 암호화 IV
- 암호화된 값(굳이 암호화 하지 않아도 되지만 서버와 싱크를 맞출 수 있는 방향이 좋다고 생각함)
- 블록픽 ID
- 서버에 저장된 픽 ID

### 5. 체크포인트

라운드가 종료되면 어떤 블록을 픽했는지 까보는 시간.

> 이 시간 동안에는 픽을 할 수 없다

이 시간에 접속하면 서버에 암호화를 풀 수 있는 키와 IV를 전송한다.

> 만약 앱이나 브라우저 데이터를 삭제하여 로컬 데이터가 소멸된 경우 BP는 차감되었지만 응모는 되지 않는다.

이 후, 서버에서는 기존에 가지고 있던 암호화된 값을 복호화할 수 있게되고 어떤 블록이 픽 되었는지 알 수 있다.

### 목록 가져오기

내가 픽한 블록 정보를 가져올 때, 값이 암호화 되어있으므로 복호화해야한다.
