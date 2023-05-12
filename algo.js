acendingOrder = function(array) {
    const mergedArr = []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j ++){
            mergedArr.push(array[i][j]);
        }
    }
    mergedArr.sort(function(a, b){
        return a - b
    })
    console.log(mergedArr);
    return mergedArr
}

acendingOrder([[1,2,3], [4, 5, 6], [7, 8, 9], [22,54,1]])
acendingOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])