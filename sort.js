// Ordenar array pelo valor
const numeros = [5, 2, 6, 1, 3, 4]

// Crescente
numeros.sort((a, b)=> a - b)
console.log("Crescente: "+numeros)

numeros.sort((a, b) => b -a)
console.log("Decrescente: " + numeros)
