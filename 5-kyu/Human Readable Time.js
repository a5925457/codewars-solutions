function humanReadable(seconds) {
    let HH, MM, SS;

    HH = Math.floor(seconds / 3600);
    MM = Math.floor((seconds - HH * 3600) / 60);
    SS = Math.floor(seconds - HH * 3600 - 60 * MM);

    HH >= 10 ? (HH = HH) : (HH = '0' + HH);
    MM >= 10 ? (MM = MM) : (MM = '0' + MM);
    SS >= 10 ? (SS = SS) : (SS = '0' + SS);

    return `${HH}:${MM}:${SS}`;
}
