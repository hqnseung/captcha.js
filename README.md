# @hqnseung/captcha.js

`@hqnseung/captcha.js`는 간단한 캡차 이미지를 생성할 수 있는 Node.js 라이브러리입니다. 보안과 사용자 확인을 위한 캡차 이미지를 빠르게 생성할 수 있습니다.

## 설치
```
npm install @hqnseung/captcha.js
```

## 예제

```js
const { generateCaptcha } = require('@hqnseung/captcha.js');
const fs = require('fs');

const { image, text } = generateCaptcha(); // 캡차 생성
console.log('CAPTCHA Text:', text); // 캡차 텍스트 출력
fs.writeFileSync('captcha.png', image); // 이미지 저장
console.log('CAPTCHA image saved as captcha.png'); 
```

## 함수 설명

### `generateCaptcha()`

캡차 이미지를 생성합니다.

- 반환값: `{ image: Buffer, text: string }`
  - `image`: 캡차 이미지 데이터 (`Buffer` 형태)
  - `text`: 캡차의 텍스트 값

## 특징

- 랜덤 글자와 스타일
- 배경 및 글자에 대한 다양한 색상 적용
- 직선, 원, 곡선 등의 추가적인 잡음 요소 생성


## 라이센스
이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.
