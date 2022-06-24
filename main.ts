/**
 * Variáveis:
 * 
 * Categoria: recebe o valor aleatório para escolher qual das colunas de categorias será usada.
 * 
 * Coluna0 ... Coluna5: Recebe valor 0 para identificar que está disponível, ou 1 para identificar que já foi escolhida, evitando repetições.
 * 
 * QtdeColunasJaDefinidas: A cada categoria (Coluna) já definida, será adicionado 1, o valor desta variável será comparado ao valor da variável QtdeColunasAUsar.
 * 
 * SE QtdeColunasJaDefinidas for menor ou igual a QtdeColunasAUsar, então ainda permite escolhas de categorias
 * 
 * SENAO
 * 
 * mostra mensagem que já foram escolhidas todas as categorias definidas.
 */
input.onButtonPressed(Button.A, function () {
	
})
// Equivale a um botão para reset, para reiniciar uma nova história.
input.onButtonPressed(Button.AB, function () {
    basic.showString("Nova historia")
    Categoria = 0
    Coluna0 = 0
    Coluna1 = 0
    Coluna2 = 0
    Coluna3 = 0
    Coluna4 = 0
    Coluna5 = 0
    QtdeColunasJaDefinidas = 1
    QtdeColunasAUsar = 4
})
input.onButtonPressed(Button.B, function () {
    let item = 0
    basic.showString("C")
    basic.showNumber(Categoria)
    basic.showString("I")
    basic.showNumber(item)
    basic.clearScreen()
})
let QtdeColunasAUsar = 0
let QtdeColunasJaDefinidas = 0
let Coluna5 = 0
let Coluna4 = 0
let Coluna3 = 0
let Coluna2 = 0
let Coluna1 = 0
let Coluna0 = 0
let Categoria = 0
Categoria = 0
Coluna0 = 0
Coluna1 = 0
Coluna2 = 0
Coluna3 = 0
Coluna4 = 0
Coluna5 = 0
QtdeColunasJaDefinidas = 1
QtdeColunasAUsar = 4
