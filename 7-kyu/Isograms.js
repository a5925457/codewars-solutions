function isIsogram(str) {
    let text = [...str];
    for (let i = 0; i < text.length; i++) {
        let count = 0;
        for (let j = 0; j < text.length; j++) {
            if (text[i].toUpperCase() == text[j].toUpperCase()) {
                count++;
                if (count != 1) {
                    return false;
                }
            }
        }
    }
    return true;
}
