//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;
}
areaCuadrado();

console.groupEnd();

//Código del triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
perimetroTriangulo();

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
areaTriangulo();

console.groupEnd();

//Código del círculo
console.group("Circulo");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML mediante JS

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = areaCuadrado(value);

    alert(perimetro);
}