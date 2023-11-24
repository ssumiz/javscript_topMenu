const data = [
    {
        listnm: "랭콘소개",
        href: "#none",
        list: [
            {
                listnm: "메뉴1",
                href: "http://naver.com",
                attr: [
                    {
                        js: "javascript",
                        c: "C_language",
                        python: "python"
                    }
                ]
            },
            {
                listnm: "메뉴2",
                href: "http://naver.com",
                attr: [
                    {
                        js: "javascript",
                        c: "C_language",
                        python: "python"
                    }
                ]
            },
            {
                listnm: "메뉴3",
                href: "http://naver.com",
                attr: [
                    {
                        js: "javascript",
                        c: "C_language",
                        python: "python"
                    }
                ]
            },
        ]
    },
    {
        listnm: "프로그램",
        href: "#none",
        list: [
            {
                listnm: "메뉴1",
                href: "http://naver.com",
            },
            {
                listnm: "메뉴2",
                href: "http://naver.com",
            },
            {
                listnm: "메뉴3",
                href: "http://naver.com",
            },
            {
                listnm: "메뉴3",
                href: "http://naver.com",
            },
        ]
    },
    {
        listnm: "입학안내",
        href: "#none",
        list: [
            {
                listnm: "메뉴1",
                href: "http://naver.com",
            },
            {
                listnm: "메뉴2",
                href: "http://naver.com",
            },
            {
                listnm: "메뉴3",
                href: "http://naver.com",
            },
        ]
    },
]


var age = 100;

function foo(age) {
    
    bar();
    bar2(age);
    console.log(age);
    // console.log(this);
}

function bar() {
    console.log(this.age);
}

function bar2(age) {
    console.log(this.age);
}

foo(age);






