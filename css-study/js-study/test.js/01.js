const name = "홍길동";
const email = "abc@mail.com";
const follower = ["홍길동"];

// 이름이 "김"으로 시작하면 "김씨 입니다 출력"
// 문자열 .startsWith()

// 이메일에 "@" 있으면 "이메일 입니다" 출력
// 문자열.includes() 사용

// 팔로워가 존해마현 "팔로워가 존재합니다" 출력
// 리스트.length사용

name.startsWith("김") && console.log("김씨 입니다.");

email.includes("@") && console.log("이메일 입니다.");

follower.length && console.log("팔로워가 존재 합니다.");

name.startsWith("홍") && email.includes("@") && follower.length && console.log("모든조건 통과 완료")


