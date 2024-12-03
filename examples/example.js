const { generateCaptcha } = require('@hqnseung/captcha.js');
const fs = require('fs');

const { image, text } = generateCaptcha(); // 캡차 생성
console.log('CAPTCHA Text:', text); // 캡차 텍스트 출력
fs.writeFileSync('captcha.png', image); // 이미지 저장
console.log('CAPTCHA image saved as captcha.png'); 