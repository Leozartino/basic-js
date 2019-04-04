function testeX(value){
  if (value >= 5){
    return value;
  }  
}

let valoresFiltrados = [98,2,5,6,7,1,2.3,5.0,4.9,5.0].filter(testeX)
console.log(valoresFiltrados)

const testeY = (valor) => {
  return valor >= 5;
}

let filtredValues = [2,5,6,8,7,9,55].filter(testeY)
console.log(filtredValues)

