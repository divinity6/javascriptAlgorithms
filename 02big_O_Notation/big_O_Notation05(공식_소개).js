/**
 * 프로그람 설명문서 주석
 * 2022.11.24
 *
 *
 *           ===== Big O Notation =====
 *
 *    - Big O 는 대략적으로 숫자를 세는 것에 붙인 공식 표현이다
 *
 *    --> 입력된 내용이 늘어날수록 알고리즘 실행시간이 어떻게 변하는지
 *        설명하는 공식적인 방식이다
 *
 *    --> Big O 는 function 의 param 값이 증가했을 경우,
 *        ( 여기서 말하는 증가는 파라미터 갯수가 아닌 말그대로 숫자파람의 숫자값증가 )
 *
 *        function 실행시간이 변하는 관계를 의미한다
 *
 *    --> 즉, 입력의 크기와 실행시간의 관계를 의미한다
 *        ( 다른것은 상관하지 않고 오로지 진행되는 추세에 주목한다 )
 *
 *    - N 이 커질수록 컴퓨터가 f(n) 상수 곱하기 f(n)보다 연산을 덜해야한다면,
 *      O( f(n) )이라고 표현한다
 *
 *    - linear ( f(n) = n ) N 의 값이 커질수록 실행시간도 늘어난다( N 이 된다 )
 *
 *    --> linear 일 경우에는 : O(n) 로 표현 가능
 *                          실제로는 1n 이든, 5n 이든, 10n 이든 상관없다
 *
 *                          n 으로 단순화 할 수 있다
 *
 *                          n 으로 단순화 하는 법 :
 *
 *                            - loop 의 자릿수( 1중 for 문이 중첩되지 않으면 여러개라도 O(n) )
 *
 *                            - 2중첩 loop ( O( n2 ) -> 실행시간이 제곱으로 차이남
 *
 *
 *    - quadratic ( f(n) = n2 ) N 의 값이 커질수록 실행시간이 N의 제곱이된다
 *
 *    --> quadratic 일 경우에는 : O(n2) 로 표현 가능
 *
 *    - constant ( f(n) = 1 ) N 이 커져도 실행시간에 아무 영향도 받지않는다
 *                            ( 항상 상수이기 때문에 1 로 표현 )
 *
 *    --> constant 일 경우에는 : O(1) 로 표현가능
 *                            --> 이 뚯은 Big O 의 실행시간이다
 *
 *    - different( f(n) ) 완전 다른 경우도 존재함
 *
 *    --> Big O 에서는 실행시간이 가질 수 있는 최대치를 잘 살펴야 한다
 *
 *
 */
title( '' );
{
}