const quotes = [
  {
    quote: "다양한 종류와 형태의 소명이 있다",
    author: "헤르만 헤세",
  },
  {
    quote: "문제는 우리가 사랑받는 것을 잊어버렸다는 것이죠",
    author: "스튜어트 에머리",
  },
  {
    quote: "마음이 과거에 있으면 우울하고 미래에 있으면 불안하다",
    author: "노자",
  },
  {
    quote: "아이디어는 큰 가치가 없다, 가치는 실행에 있다",
    author: "시드 마이어",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
