'use strict'
// create all 8 magic sqaures for a 3 by 3 matrix
// where elements are 1 <= x <= 9
// and distinct
const magicSize = 3

function getColumnRow(s, j, type){
    let sum = []
    for(let i = 0; i < magicSize; i++){
        if(type === 'row')
            sum.push(s[j][i])
        else if(type === 'col')
            sum.push(s[i][j])
    }
    return sum
}

function RotateMagic(s){
    let s_ = []
    for(let i = magicSize - 1; i >= 0; i--){
        s_.push(getColumnRow(s, i, 'col'))
    }
    return s_
}

function flip(s, side){
    // swop rows
    let s_ = []
    if(side){
        for(let i = magicSize - 1; i >= 0; i--)
            s_.push(getColumnRow(s, i, 'row'))
    }else{
        for(let i = 0; i < magicSize; i++){
            let temp = []
            for(let j = 0; j < magicSize; j++){
                temp.push(s[i][magicSize - 1 - j])
            }
            s_.push(temp)
            temp = []
        }
    }
    return s_
}


function AllMagicSqaures(){
    let s = [[[2, 9, 4], [7, 5, 3], [6, 1, 8]]]
    // rotate the magic sqaures
    for(let i = 0; i < magicSize; i++){
        if(i % 2 !== 1)
            s.push(flip(s[i], true))
        else
            s.push(flip(flip(s[i], false), true))

        s.push(RotateMagic(s[i]))
    }
    s.push(RotateMagic(s[s.length - 1]))
    console.log(s)
}

AllMagicSqaures()

