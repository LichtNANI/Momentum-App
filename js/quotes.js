const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Always bear in mind that your own resolution to succeed is more important than any other.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.seil() : 소수점자리 숫자를 올려서 정수로 만들
// Math.round() : 반올림 해서 정수를 만듬
// Math.floor() : 소수점자리 숫자를 없앰
// Math.random() : 0~1 사이의 랜덤한 숫자를 생성
