/**
 * 프로그람 설명문서 주석
 * 2022.11.24
 *
 *
 *           ===== Big O Notation =====
 *
 *    - 전체적인 추세가 중요하다!
 *
 *    -->  따라서, addUpTo 반복문( 5n + 2 )를
 *         그냥 n 으로 단순화했다
 *
 *    --> O(2n) --> O(n)
 *
 *    --> O(500) -->O(1)
 *
 *    --> O(13n2) --> O(n2)
 *
 *    --> O(n + 10) --> O(n)
 *
 *    --> O(1000n + 50) --> O(n)
 *
 *    --> O(n2 + 5n + 8) --> O(n2)
 *
 *    ----> 연산갯수가 중요한게 아닌, 얼마만큼 시간에따라 증가하느냐가 중요한것
 *
 *    ----> 위처럼 상수를 없애면 단순화된것들만 비교할 수 있다
 *
 *    ----> 상대적으로 가장 중요한부분을 보는 것
 *
 *    ========================================================
 *                          명심할 몇가지
 *    ========================================================
 *
 *    - 빅오의 복잡도를 분석할때 매우 복잡해지는 것 몇가지가 있다
 *      ( 항상 맞는 것은 아니다 )
 *
 *    1. 산수는 상수다( 덧셈, 뺄셈 , 곱셈 , 나눗셈 )
 *
 *    2. 변수선언도 상수다
 *
 *    3. 배열에 index 를 통해 접근하는 것도 상수다
 *    --> index 로 접근하게 되면 몇번째 아이템을 찾든 똑같은 시간이 걸린다
 *        ( or 객체의 데이터에 접근하기위해 키로 접근도 상수 )
 *
 *    4. for( 루프 )가 있다면 복잡도가 루프 길이 곱하기 루프안에 있는 연산이된다
 *    --> 만약, 중첩 loop 가 있다면, n 제곱 실행시간이 될 수 있다
 *
 *    -----> for 문이라고 전부 O(n)는 아니다
 *
 */
title( 'for 문인데 O(1)예시' );
{
    function logAtMost5( n ){
        for ( var i = 1; i <= Math.min( 5 , n ); i++ ){
            console.log( i );
        }
    }

    /**
     * - n 값이 아무리 크게 증가하더라도,
     *   최대 5까지밖에 커지지 않고, 우리는 이 추세가 일정이상 커지지 않는다고 볼 수 있다
     *
     * --> 따라서 해당 표현식은
     *     O(1) : 즉, 상수다
     */
}