'use strict'

let matrix = [[112, 42, 83, 119], [56, 125, 56, 49],[15, 78, 101, 43], [62, 98, 114, 108]]
function flipRowCol(m, rc, type){

    // flipping a row
    if(type == true){
        for(let i = 0; i < m.length/2; i++){
            let temp = m[rc][i]
            m[rc][i] = m[rc][m.length - 1 - i]
            m[rc][m.length - 1 - i] = temp
        }
    }else{
        // flipping a column
        for(let i = 0; i < m.length/2; i++){
            let temp = m[i][rc]
            m[i][rc] = m[m.length - 1 - i][rc]
            m[m.length - 1 - i][rc] = temp
        }
    }
    return m
}

function Algorithm1(m, row, col){
    if(row == 0){
        return flipRowCol(m, col, false)
    }else{
        for(let i = 0; i < row; i++){
            m = flipRowCol(m, i, true)
        }
        m = flipRowCol(m, col, false)
        for(let i = 0; i < row; i++){
            m = flipRowCol(m, i, true)
        }
        return m
    }
}

function Algorithm2(m, row, col){
    m = flipRowCol(m, m.length - 1 - row, true)
    return Algorithm1(m, row, col)
}

function Algorithm3(m, row, col){
    m = flipRowCol(m, m.length - 1 - col, false)
    return Algorithm2(m, row, col)
}

function Sum(m){
    let sum = 0
    for(let i = 0; i < m.length/2; i++){
        for(let j = 0; j < m.length/2; j++){
            sum += m[i][j]
        }
    }
    return sum
}

function flippingMatrix(m){
    // let sum = 0
    let s = m.length - 1
   for(let i = 0; i <= s/2; i++){
       for(let j = 0; j <= s/2; j++){
            let temp = m[i][j]
            let count = 0;
            if(m[i][s - j] > temp){
                temp = m[i][s - j]
                count = 3
            }
             if(m[s - i][j] > temp){
                temp = m[s - i][j]
                count = 1;
            }
             if(m[s - i][s - j] > temp){
                temp = m[s - i][s - j]
                count = 2;
            }
            // sum += temp;
            if(count == 1){
                Algorithm1(m,i,j)
            }else if(count == 2){
                Algorithm2(m,i,j)
            }else if(count == 3){
                Algorithm3(m,i,j)
            }
        }
   }
   console.log(m)
   return Sum(m)
//    return sum
}
console.log((matrix))
console.log(flippingMatrix(matrix))
//console.log(isSumGreater(matrix, 0, false))