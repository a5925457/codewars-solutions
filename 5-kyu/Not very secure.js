function alphanumeric(string) {
    let confirm = /[0-9a-z]/i;
    if (!confirm.test(string) || string.includes('_') || string.includes('!') || string.includes(' ')) {
        return false;
    } else {
        return true;
    }
}
