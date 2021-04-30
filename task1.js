function cartSort(arr) {
    return arr.filter(function (item, pos) {
        return arr.indexOf(item) === pos;
    }).sort(function (a, b) {
        return normalize(a) - normalize(b);
    })
}

function normalize(arg) {
    switch (arg) {
        case 'J':
            arg = 11;
            break;
        case 'Q':
            arg = 12;
            break;
        case 'K':
            arg = 13;
            break;
        case 'T':
            arg = 14;
            break;
    }
    return arg;
}

console.log(cartSort([1, 2, 8, "K", 6, 8, 1, 4, 2, 4, 10, 'J', 'Q', 'K', 10, 3, "Q", "J", 7, 5, 'T']));