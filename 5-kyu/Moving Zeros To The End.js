var moveZeros = function (arr) {
    let ar2 = arr.filter((item) => {
        return item === 0;
    });
    let ar3 = arr.filter((item) => {
        return item !== 0;
    });

    for (let i = 0; i < ar2.length; i++) {
        ar3.push(0);
    }
    return ar3;
};
