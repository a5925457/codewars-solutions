function toUnderscore(string) {
    let re = /^\d+$/;
    if (re.test(string)) {
        return string.toString();
    }
    let result = [...string];

    let check = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && isNaN(string[i])) {
            if (i !== 0) {
                check.push(i);
            }
        }
    }
    check.forEach((v, i) => {
        result.splice(v + i, 0, '_');
    });
    return result.join('').toLowerCase();
}
