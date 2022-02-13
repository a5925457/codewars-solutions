function sortArray(array) {
    let needSort = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1 || array[i] % 2 == -1) {
            needSort.push({
                value: array[i],
                index: i,
            });
        }
    }

    let copy = JSON.parse(JSON.stringify(needSort));

    needSort.sort(function (a, b) {
        return a.value - b.value;
    });

    for (let i = 0; i < copy.length; i++) {
        needSort[i].index = copy[i].index;
    }

    for (let i = 0; i < needSort.length; i++) {
        array[needSort[i].index] = needSort[i].value;
    }

    return array;
}
