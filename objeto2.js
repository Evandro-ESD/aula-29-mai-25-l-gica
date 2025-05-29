// uso do array.forEach(element => {});

const produtos =
    [ 
        {nome: "Notebook", preco: 3500},
        {nome: "Teclado", preco: 500},
        {nome: "Mouse", preco: 35},
        {nome: "Caixa de som", preco: 30},
    ]

console.log("Produto acima de R$ 100,00")

produtos.forEach(item => {
    if(item.preco > 100) console.log(`${item.nome}: R$ ${item.preco.toFixed(2).replace('.', ',')}`)
})