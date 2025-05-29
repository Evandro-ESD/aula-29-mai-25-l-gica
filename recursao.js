contagem_regressiva = (n) => {
    console.log(n)
    if (n === 0) {
        return
    }
    // chamdada recursiva
    contagem_regressiva(n - 1)
}
contagem_regressiva(5)