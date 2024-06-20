let grados_centigrados;
let grados_farenheit;
let suma = 32
let multiplicacion = 1.8

grados_centigrados = Number(prompt(`ingrese grados centigrados`));

grados_farenheit = grados_centigrados * multiplicacion + suma 

document.write(`Los grados farenheit son ${grados_farenheit}`);