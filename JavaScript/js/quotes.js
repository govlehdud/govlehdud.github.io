const quotes = [
    {quote: "아무것도 배우지않고 있기보다는 쓸모없는 것이라도 배우는편이 낫다",
        author: "세네카",
    },
    {quote: "가족들이 서로 하나로 맺어져 있다는것 그것이 진정 이 세상에 유일한 행복이다.",
        author: "마리 쿼리",
    },
    {quote: "모든어린이는 예술가다 문제는 어른이 되어서도 어떻게 예술가로 남아 있느냐는 것이다.",
        author: "파블로 피카소",
    },
    {quote: "친구란 두 몸에 깃들인 하나의 영혼이다.",
        author: "아리스토텔레스",
    },
    {quote: "돈은 최선의 종이요, 최악의 주인이다.",
        author: "프랜시스 베이컨",
    },
    {quote: "그 무엇보다 자신의 가슴과 직관의 따른다.",
        author: "스티브 잡스",
    },
    {quote: "진정 원하는 것에 온전히 집중할 때 우리는 비로소 성장할 수 있다.",
        author: "빌 버넷",
    },
    {quote: "인생은 자전거를 타는 것과 같다 균형을 유지하기 위해서는 게속 움직여야만 한다.",
        author: "아인슈타인",
    },
    {quote: "꿈을 크게 가져라 오직 큰 꿈만이 영혼을 감동시킬 수 있다.",
        author: "마르쿠스 아우렐리우스",
    },
    {quote: "좋은 친구는 네잎클로버와 같다.",
        author: "아일랜드",
    },
    {quote: "자신을 어떻게 생각하느냐가 자신의 운명을 결정짓는다.",
        author: "헨리 데이비드 소로",
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;