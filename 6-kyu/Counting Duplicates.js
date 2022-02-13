function duplicateCount(text) {
    let arr = [...text.toUpperCase()];
    let result = new Set();
    let repeat = new Set();
    arr.forEach((item) => {
        result.has(item) ? repeat.add(item) : result.add(item);
    });
    return repeat.size;
}
