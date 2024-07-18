let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroDeJuegosPermitidos = 3;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return; //Es una buena practica colocar return;
}

function VerificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() { //si usamos querySelector si usamos # sirve para id
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo)
    + 1;

  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Todos los números han sido asigandos');
  } else {
    //Sí el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado)
      return numeroGenerado
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalos de número
  //Generar un número aleatorio
  //Inicializar el número de intentos
  if (listaNumerosSorteados.length == numeroDeJuegosPermitidos) {
    asignarTextoElemento('p', 'Máximo de Juegos jugados');
    document.querySelector('#valorUsuario').setAttribute('disabled', 'true');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  } else {
    condicionesIniciales();
    //Deshabilitar el botón de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  }

}

condicionesIniciales();

//---- Desafios ----
/*
function holaMundo() {
  console.log('Hola mundo');
}

function HolaNombre(nombre) {
  console.log(`Hola, ${nombre}`);
}

function dobleInt(numero) {
  return numero * 2;
}

function avg(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}

function mayorA(numero1, numero2) {
  if (numero1 > numero2) return numero1; else return numero2;
}

function exponencial(numero) {
  return numero * numero;
}

holaMundo();
HolaNombre('Rafael');
console.log(dobleInt(5));
console.log(avg(8, 6, 10));
console.log(mayorA(20, 15));
console.log(exponencial(5));
*/

//------Desafio #2------
/*
function imc(altura, peso) {
  return peso / altura;
}

function factorial(numero) {
  let x = 1;
  if (numero > 0) {
    x = numero * factorial(numero - 1)
  } else {
    x = x * 1
  }
  return x;
}

function conversionDolaresAReales(valorDolares) {
  const dolarReal = 5.49;
  return valorDolares * dolarReal;
}

function caracteristicasRectangulo(largo, ancho) {
  return [largo * ancho, largo * 2 + ancho * 2]
}

function caracteristicasCirculo(radio) {
  const PI = 3.14;
  return [PI * radio ** 2, 2 * PI * radio]
}

function tablaMultiplicar(numero) {
  let mensaje = ``;
  for (let index = 1; index <= 10; index++) {
    mensaje = `${mensaje}
    ${numero} x ${index} = ${numero * index}`;
  }
  return mensaje;
}

console.log(imc(1.68, 55));
console.log(factorial(7));
console.log(conversionDolaresAReales(5000));
const rectangulo = caracteristicasRectangulo(5, 8);
alert(`El área es: ${rectangulo[0]} y el perímetro es: ${rectangulo[1]}`);
const circulo = caracteristicasCirculo(4);
alert(`El área es: ${circulo[0]} y el perímetro es: ${circulo[1]}`);
alert(tablaMultiplicar(3));
*/
/*
//------Desafio #3 ------

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
let listaNumeros = [8, 12, 10, 14, 6, 16];
let listaNumeros2 = [2, 8, 10, 6, 4, 4];

function mostrarLenguajes(lista) {
  for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);

  }
};

function mostrarLenguajesInvertido(lista) {
  for (let index = lista.length - 1; index >= 0; index--) {
    console.log(lista[index]);

  }
};

function promedioLista(lista) {
  promedio = 0;
  for (let index = 0; index < lista.length; index++) {
    promedio = promedio + lista[index];
  }
  promedio = promedio / lista.length;
  console.log(promedio);
};

function grandePequenoLista(lista) {
  let grande = lista[0];
  let peque = lista[0];
  for (let index = 0; index < lista.length; index++) {
    if (grande < lista[index]) {
      grande = lista[index];
    };
    if (peque > lista[index]) {
      peque = lista[index];
    };
  };
  console.log(`Número mayor ${grande} y menor ${peque}`);
};

function sumaLista(lista) {
  let elemento = 0;
  for (let index = 0; index < lista.length; index++) {
    elemento = elemento + lista[index];
  };
  return elemento
};

function encontrarPosición(elemento, lista) {
  for (let index = 0; index < lista.length; index++) {
    if (lista[index] === elemento) {
      return index
    };
  }
  return -1;
}

function sumaDosListas(lista, lista2) {
  let nuevaLista = [];
  for (let index = 0; index < lista.length; index++) {
    nuevaLista.push(lista2[index] + lista[index]);
  };
  return nuevaLista;
};

function cuadradoListas(lista) {
  let nuevaLista = [];
  for (let index = 0; index < lista.length; index++) {
    nuevaLista.push(lista[index] ** 2);
  };
  return nuevaLista;
};

mostrarLenguajes(lenguagesDeProgramacion);
mostrarLenguajesInvertido(lenguagesDeProgramacion);
promedioLista(listaNumeros);
grandePequenoLista(listaNumeros);
console.log(sumaLista(listaNumeros));
console.log(encontrarPosición(5, listaNumeros));
console.log(sumaDosListas(listaNumeros, listaNumeros2));
console.log(cuadradoListas(listaNumeros));
*/