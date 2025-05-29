//
let pessoa = {
    nome: "Julio",
    idade: 25,
    cpf: 21345698754
}
let pessoas = []
// função criar um nova pessoa
criarPessoa = (nome, idade, cpf)=>{
    const pessoa = {
        nome: nome,
        idade: idade,
        cpf: cpf
    }
    pessoas.push(pessoa)
    console.log(`Pessoa adicionada: ${nome}, ${idade} anos, ${cpf}`)
}
// função listar todas as pessoas
function listarPessoas(){
    console.log("\nLista de pessoas:")
    pessoas.forEach((element, idx) => {
        console.log(`${idx}: ${element.nome} - ${element.idade} anos, ${element.cpf}`)        
    });
}

// Função para atualizar uma pessoa
atualizarPessoa =(indice, novoNome, novaIdade, novoCpf)=>{
    if(pessoas[indice]){
        pessoas[indice].nome  = novoNome,
        pessoas[indice].idade = novaIdade,
        pessoas[indice].cpf   = novoCpf
        console.log(`Pessoa atualizada no índice: ${indice}`)
    }else{
        console.log(`Entrada inválida: ${indice}`)
    }
}

// Função para excluir uma pessoa
excluirPessoa = (indice)=>{
    if(pessoas[indice]){
        const removida = pessoas.splice(indice, 1)
        console.log(`Pessoa removida: ${removida[0].nome}`)
    } else{alert(`Índice inválido`)}
}


criarPessoa("Marcia", 32, 78945612332)
criarPessoa("Carlos", 64, 18167698721)
criarPessoa("Santos", 54, 18167698798)
listarPessoas()
atualizarPessoa(2, "Chapollin", 20, 44555466421)
listarPessoas()
excluirPessoa(2)
listarPessoas()