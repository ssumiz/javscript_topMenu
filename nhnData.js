
// 데이터구축을 위해서 navi데이터를 javascript object로 변수명은 nhncategory로 진행해주세요.

const nhncategoty = [
    {
        gnbList: "회사소개",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: [
            {
                gnbSubList: "회사소개",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "국내법인",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "해외법인",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "브랜드",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
        ],
    },
    {
        gnbList: "서비스",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: false,
        sub: [
            {
                gnbSubList: "게임",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "결제·광고",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "커머스",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "기술",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "콘텐츠",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
        ],
    },
    {
        gnbList: "홍보",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: [
            {
                gnbSubList: "보도자료",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
        ],
    },
    {
        gnbList: "투자정보",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: [
            {
                gnbSubList: "공시정보",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "주가정보",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "재무제표",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "IR 행사",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "일반공고",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
        ],
    },
    {
        gnbList: "ESG",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: [
            {
                gnbSubList: "ESG 경영",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "환경",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "사회",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "지배구조",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "기업윤리",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
            {
                gnbSubList: "보고서•정책",
                class: "gnbSubList",
                href: "https://www.nhn.com/",
                dblock: true,
            },
        ],
    },
    {
        gnbList: "CAREERS",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: []
    },
    {
        gnbList: "INSIDE NHN",
        class: "gnbList",
        href: "https://www.nhn.com/",
        dblock: true,
        sub: []
    },
]

let data = "";

data = nhncategoty[0].sub[1].gnbSubList;

// console.log(data);


function naviHtml(first, seconds) {
    console.log(nhncategoty[first].sub[seconds].gnbSubList);
}

naviHtml(0, 0);
naviHtml(0, 1);
naviHtml(0, 2);

naviHtml(1, 0);
naviHtml(1, 1);
naviHtml(1, 2);