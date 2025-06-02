contagem_regressiva = (n) => {
    console.log(n)
    
    if (n === 0) { //caso base
        return
    }
    
    contagem_regressiva(n - 1) // chamdada recursiva
}
contagem_regressiva(5)