function copyArray(source, array) {
    let index = -1
    let len = source.length
    array || (array=new Array(len))
    while (++index < len) {
        console.log(index)
        array[index] = source[index]
    }
    return array
}

let source = [1,23,34,34,,54,1,23];
let copyArr = copyArray(source,[])
console.log(copyArr)
