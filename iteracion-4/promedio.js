const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let suma = 0;
    for (let i=0; i<param.length; i++) {
        suma += param[i];
    }
    return suma / param.length;
}

let promedio = average(numbers);
console.log("Promedio: " + promedio);

