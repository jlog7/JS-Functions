const numbers = [1,2,3,5,45,37,58];
function sumAll(param) {
    let suma = 0;
    for (let i = 0; i < param.length; ++i) {
        suma += param[i];
        console.log("i=" + i + " Suma= " + suma);
    }
    return suma
}

let total = 0;
total = sumAll(numbers);
console.log("Suma: " + total);