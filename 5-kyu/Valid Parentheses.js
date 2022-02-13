function validParentheses(parens) {
    if (parens == '' || parens == null || parens == undefined) return true;
    let a = 0;
    let b = 0;

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') {
            a++;
        } else if (parens[i] == ')') {
            b++;
        }
        if (b > a) return false;
    }
    if (a == b) {
        if (parens[0] == '(' && parens[parens.length - 1] == ')') {
            return true;
        }
    }

    return false;
}
