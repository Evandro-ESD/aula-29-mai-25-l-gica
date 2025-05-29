//
const alunos = [
    { nome: "José", nota: 7.5 },
    { nome: "Eduardo", nota: 2.5 },
    { nome: "Celso", nota: 9.2 },
    { nome: "Bruno", nota: 6.8 },
    { nome: "Daniela", nota: 7.5 },
    { nome: "Emily", nota: 10.0 }
];

// 1. ordeanar por nota (crescente)
const porNota = [...alunos].sort((a, b) => a.nota - b.nota)
console.log("Por nota crescente")
console.log(porNota)


// 2. ordeanar por nome (alfabética)
const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome))
console.log("Por nome alfabética:")
console.log(porNome)

// 3. Maior nota
const maiorNota = porNota[porNota.length - 1]
console.log(maiorNota)

// 4. Menor nota
const menorNota = porNota[0]
console.log("Menor nota: " + "Aluno: "+ menorNota.nome + " | nota: "+menorNota.nota)


// alunos.sort((a,b)=>a+b)