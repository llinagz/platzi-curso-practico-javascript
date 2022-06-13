//Funciones

const firstName = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + lastname;
const nickname = "juandc";

const miFuncion = (completeName, nickname) => {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

miFuncion(completeName, nickname);

//Condicionales
const tipoSuscripcion = prompt("¿Qué tipo de suscripción tienes?");

if(tipoSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Ciclos
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

i = 0;
while(i < 5){
    console.log(i++);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

i = 10;
while(i>=2){
    console.log("El valor de i es: " + i--);
}

function juego() {
    let resultado;
    do {
      resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
    } while ( resultado !== 4 );
    if (resultado === 4){
        console.log('¡Eres un GENIO!');
    }
  }
  juego();

  //Arrays

// 1.-
  // a) Un array es un tipo de datos objetos, puedes guardar distintos valores como si fuera una lista y se encuentran seguidos en memoria.
  let lista = ['hola', 'como', 'estas']
  // b) Un objeto te permite guardar datos con claves y valores ejemplo:
  const objetoCarro = {
    marca: 'Bugatti',
    modelo: 'Chiron',
    precio: '1 USD'
  }

// 2.-
  function array(a) {
    return console.log(a[0]);
  }

  array(lista);
// 3.-
  for (const value of lista) {
    console.log(value);
  }
// 4.-
  for (const property in objetoCarro) {
    if (Object.hasOwnProperty.call(objetoCarro, property)) {
      const element = objetoCarro[property];
      console.log(element);
    }
  }