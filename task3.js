function superfunc() {
    let arr = [];
    return function (...arguments) {
        arr = [...arr, ...arguments];
        return arr;
    }
}

let a = superfunc()
console.log(a(1, 2, 3))

let b = superfunc()
console.log(b(1, 2))
console.log(a(5))
