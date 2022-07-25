// console.log("hola mundo")

// // no recomendada
// var name = "lonel"

// // recomendada
// let lastname = "Messie"

// const age = 35;

// age = "adfa"

// const s = {
// }

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
}

// Anonima
let rectangulo = class {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
};
  
  console.log(Rectangulo.name);
  // output: "Rectangulo"
  
  // Nombrada
  let rrectangulo = class Rectangulo2 {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
  console.log(Rectangulo.name);
  // output: "Rectangulo2"

  class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); // 7.0710678118654755

function mayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else if (num2 > num1) {
        console.log(num2)
    } else console.log('Ambos son iguales')
}

console.log(mayor(59, 45))

function mario(num1, num2) {
}

const bar = {
    foo0: function() { return 0 },
    foo1() { return 1 },
    ['foo' + 2]() { return 2 }
  }
  
  console.log(bar.foo0())  // 0
  console.log(bar.foo1())  // 1
  console.log(bar.foo2())  // 2
  
  // A global function
  function foo() {
    return 1
  }
  
//   let name = 'foo'
//   console.log(foo[name]())  // 1

  let use = false
  var o = [23, 'sdrr', false, 6.7]
  for (const iterator of o) {
    console.log(iterator)
  }
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

array.forEach(element => {
    
});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
}