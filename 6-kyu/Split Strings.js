function solution(str) {
    let result = [];

    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length; i++) {
            result.push(str.substr(i, 2));
            i += 1;
        }
    } else {
        for (let i = 0; i < str.length - 1; i++) {
            result.push(str.substr(i, 2));
            i += 1;
        }

        result.push(...[str.slice(-1) + '_']);
    }

    return result;
}
