console.log( '=========================== bubbleSort =============================' );

/**
 * - bubbleSort
 *
 * - 버블 정렬 구현
 */
/** mySolution */
function bubbleSort( arr ){

    /** 크게 전체를 한번 순회 */
    for ( let i = arr.length; 0 < i; i -= 1 ){

        /** 순회할때마다, 누적된 마지막 값은 계산에서 제외된 만큼 반복함 */
        for ( let j = 0; j < i - 1; j += 1 ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                swap( arr , j , j + 1 );
            }
        }
    }

    return arr;

}

function swap( arr , idx1 , idx2 ){
    const temp = arr[ idx1 ];
    arr[ idx1 ] = arr[ idx2 ];
    arr[ idx2 ] = temp;
}

/**
 * - 최적화되지 않는 코드들은 매번 이미 정렬된 값들까지 비교와 교환을 실시하게 된다
 *
 * --> 필요없는 비교와 연산과정이 들어가게 된다
 */
/** stupidSolution */
function bubbleSort( arr ){

    for ( var i = 0; i < arr.length; i++ ){
        for ( var j = 0; j < arr.length; j++ ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                // SWAP!
                var temp = arr[ j ];
                arr[ j ] = arr[ j + 1];
                arr[ j + 1] = temp;
            }
        }
    }

    return arr;
}

/**
 * - 이번엔 내가 예측한거랑 해법이랑 정확히 일치하네 ㅋㅋ답
 *
 * - 매번 비교할때마다 루프가 줄어든다
 */
/** goodSolution */
function bubbleSort( arr ){

    for ( var i = arr.length; i > 0; i-- ){
        for ( var j = 0; j < i - 1; j++ ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                // SWAP!
                var temp = arr[ j ];
                arr[ j ] = arr[ j + 1];
                arr[ j + 1] = temp;
            }
        }
    }

    return arr;
}


console.log(bubbleSort([37 , 45 , 29 , 8 ]));
console.log(bubbleSort([7 , 10 , 21 , 3 , 5 , 2 ]));
console.log(bubbleSort([7 , 6 , 7 , 4 , 10 , 1 ]));

console.log( '=========================== bubbleSortOptimization =============================' );

/**
 * - bubbleSort
 *
 * - 버블 정렬 성능 최적화
 *
 * --> 거의 정렬된 배열의 성능을 최적화시키는 작업
 */
/** mySolution */
function bubbleSortOptimization( arr ){

    let stopLoop = false;

    let compareArr = arr.slice();

    /** 크게 전체를 한번 순회 */
    for ( let i = arr.length; 0 < i; i -= 1 ){
        /** 만약 지난번 정렬에서 변경이 없었다면 더이상 루프를 돌지 않음 */
        if ( stopLoop ){
            break;
        }

        /** 순회할때마다, 누적된 마지막 값은 계산에서 제외된 만큼 반복함 */
        for ( let j = 0; j < i - 1; j += 1 ){

            if ( arr[ j ] > arr[ j + 1 ] ){
                swap( arr , j , j + 1 );
            }
        }

        /** 같은 값이면 더이상 루프를 돌 필요가 없음 */
        if ( compareArr === arr ){
            stopLoop = true;
        }

        compareArr = arr;

    }

    return arr;

}

function swap( arr , idx1 , idx2 ){
    const temp = arr[ idx1 ];
    arr[ idx1 ] = arr[ idx2 ];
    arr[ idx2 ] = temp;
}

/**
 * - 매번반복할때마다, swap 을했는지를 체크하고, swap 을했으면 반복하지 않는다
 *
 * --> j 에서 한번이라도 swap 을 하면 반복을해야하니깐!
 *
 * --> 저 안에다 두는게 명답이네!
 *
 * --> 이러한 사소한 변화가 시간을 많이 절약할 수 있다!
 */
/** goodSolution */
function bubbleSortOptimization( arr ){
    var noSwaps;
    for ( var i = arr.length; i > 0; i-- ){
        noSwaps = true;
        for ( var j = 0; j < i - 1; j++ ){
            if ( arr[ j ] > arr[ j + 1 ] ){
                // SWAP!
                var temp = arr[ j ];
                arr[ j ] = arr[ j + 1];
                arr[ j + 1] = temp;
                noSwaps = false;
            }
        }

        if ( noSwaps ){
            break;
        }
    }

    return arr;
}


console.log(bubbleSortOptimization([37 , 45 , 29 , 8 ]));
console.log(bubbleSortOptimization([7 , 10 , 21 , 3 , 5 , 2 ]));
console.log(bubbleSortOptimization([7 , 6 , 7 , 4 , 10 , 1 ]));
console.log(bubbleSortOptimization([ 3 , 1 , 5 , 7 , 10 ]));

