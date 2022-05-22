const { count } = require("console")

s = [[5,3,4],[1,5,8],[6,4,2]]

const arrSize = 3
function addRowsAndColumns(arr, j, type){
    let sum = 0

    for(let i = 0; i < arrSize; i++){
        if(type == 'row')
            sum += arr[j][i]
        else 
            sum += arr[i][j]
    }
    return sum
}

function addAdjRowsAndColumns(arr, j, k, type){
    let sum = 0

    for(let i = 0; i < arrSize; i++){
        if(type == 'row' && i != k)
            sum += arr[j][i]
        else if(i != j)
            sum += arr[i][k]
    }
    return sum
}

function addDiagonals(arr, type){
    let sum = 0
    for(let i = 0; i < arrSize; i++){
        if(type === true)
            sum += arr[i][i]
        else
            sum += arr[i][arrSize - 1 - i]
    }
    return sum;
}

function addAdjDiagonals(arr, j,  type){
    let sum = 0
    for(let i = 0; i < arrSize; i++){
        if(i === j ) continue
        if(type === false)
            sum += arr[i][i]
        else
            sum += arr[i][arrSize - 1 - i]
    }
    return sum;
}

function formingMagicSquare(s) {
    // Write your code here
    let cost = 0
    let s_ = s
    // check for diagonals first
    let changeDaig = false;
    let isChanged = false;
    let count = 0
    while(true){
        let magic = addDiagonals(s, changeDaig)
        count ++
        if(addDiagonals(s, !changeDaig) !== magic){
            for(let i = 0; i < arrSize; i++){
                if(i == 1) continue
                let colmagic = addRowsAndColumns(s_,i, 'col')
                let rowmag = addRowsAndColumns(s_,i, 'row')
                console.log(magic + " " + rowmag + " " + colmagic)
                if(!(colmagic === magic || rowmag === magic)){
                    console.log(s_[i][arrSize - 1 - i] + " " + i)
                    s_[i][arrSize - 1 - i] = magic - addAdjDiagonals(s_, i, true)
                    console.log(s_[i][arrSize - 1 - i])
                    isChanged = true
                    console.log("do not start again")
                    break
                }
            }
            if(!isChanged){
                console.log("start again")
                changeDaig = !changeDaig
                continue
            }
        }
        break;
    }


    // check the magic for colums
    // for(let i = 0; i < arrSize; i++){
    //     let newMagic = addRowsAndColumns(s_, i, 'col')
    //     if(newMagic !== magic){
    //         let moveDown = 0;
    //         let rowMag = addRowsAndColumns(s_, moveDown, 'row')
            
    //         while (rowMag === magic && moveDown != 2){
    //             moveDown++
    //             rowMag = addRowsAndColumns(s_, moveDown, 'row')
    //         }
    //         if(rowMag !== magic){
    //             s_[moveDown][i] = magic - addAdjRowsAndColumns(s_,moveDown,i,'col')
    //         }
    //     }
    // }
    console.log(s_)
}
console.log(s)
formingMagicSquare(s)