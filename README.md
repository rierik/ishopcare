# ishopcare-merchant-contract

아이샵케어 신규가맹점계약 과제

## NavigationBar

- 뒤로 누르면 상태값을 유지한 이전 페이지로 넘어가도록 수정

## 대표자 정보입력

- 이름, 전화번호, 이메일 입력이 다 들어온다면 엔터로 화면 넘기기
- 전화번호는 11글자, 이메일은 @와 .com이 들어있을 경우에만 버튼의 disabled가 풀리도록 설정

## 매장 정보 입력

- 입력이 다 들어오면 엔터로 화면 넘기기
- 칸이 다 채워지면 다음 버튼 disabled 풀리도록 구현

## 업종정보 입력

- 업종 정보를 클릭하면 제출하기에 불이 들어오도록 수정

### 리팩토링

- 더욱 사용자가 많이져 다른 페이지가 늘어난다는 가정하에 직관적으로 사용할 수 있는 상태 라이브러리 zustand를 사용하기로 결정 (시간상 구현을 다 못할 것 같아서 롤백)
