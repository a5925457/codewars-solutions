var CaesarCipher = function (shift) {
    this.encode = function (str) {
        let result = [];
        const re = /^[a-zA-Z]*$/;
        for (let i = 0; i < str.length; i++) {
            if (re.test(str[i])) {
                result.push(str.toUpperCase().charCodeAt(i));
                result[i] += shift;
                if (result[i] < 116 || result[i] > 39) {
                    if (result[i] > 90) {
                        result[i] -= 26;
                    } else if (result[i] < 65) {
                        result[i] += 26;
                    }
                    result[i] = String.fromCharCode(result[i]);
                }
            } else {
                result[i] = str[i];
            }
        }
        return result.join('');
    };

    this.decode = function (str) {
        let result = [];
        const re = /^[a-zA-Z]*$/;
        for (let i = 0; i < str.length; i++) {
            if (re.test(str[i])) {
                result.push(str.toUpperCase().charCodeAt(i));
                result[i] -= shift;
                if (result[i] < 116 || result[i] > 39) {
                    if (result[i] > 90) {
                        result[i] -= 26;
                    } else if (result[i] < 65) {
                        result[i] += 26;
                    }
                    result[i] = String.fromCharCode(result[i]);
                }
            } else {
                result[i] = str[i];
            }
        }
        return result.join('');
    };
};
