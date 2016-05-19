function findEvenArr(arr) {
    var evenArr = [];
    for (var i = 1; i < arr.length; i += 2) {
        evenArr.push(arr[i]);
    }

    return evenArr;
}

function returnArray(evenArr) {
    var len = evenArr.length;

    if (len % 2 === 0) {

        return (evenArr[len / 2] + evenArr[len / 2 - 1]) / 2;
    }
    else {

        return evenArr[parseInt(len / 2)];
    }
}

function calculate_median(arr) {

    var evenArr = findEvenArr(arr);

    return returnArray(evenArr);
}

module.exports = calculate_median;
