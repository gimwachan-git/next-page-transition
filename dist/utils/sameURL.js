export function isSameURL(target, current) {
    var cleanTarget = target.protocol + "//" + target.host + target.pathname;
    var cleanCurrent = current.protocol + "//" + current.host + current.pathname;
    return cleanTarget === cleanCurrent;
}
