/*Professor “Ludovico Volpato” está de volta e deseja uma solução que alimente um 
vetor com 10 valores inteiros e também que solicite ao usuário a entrada de dados de 
um valor inteiro qualquer. A solução deverá fazer uma busca do valor, informado pelo 
usuário, no vetor e imprima a posição em que este foi encontrado ou se não foi 
encontrado. */

function validaProc() {

    // Declarando vetor
    let valor=[];
    let valor2;
    let novoValor;
    let encontrado = false;

    // Alimentando o vetor com dados
        for(let i = 0; i < 10; i++) {
            do {
                novoValor = parseInt(prompt("Digite o " + (i + 1) + "º valor (sem repetir): "));
                if(valor.includes(novoValor)) {
                    alert("Valor repetido! Por favor, digite outro número.");
                }
            } while(valor.includes(novoValor) || isNaN(novoValor));
        
            valor[i] = novoValor;
            console.log((i + 1) + "º valor informado: " + valor[i]);
        }

    console.log("")

    valor2=parseInt(prompt("Digite um valor: "));
    console.log("Valor informado: " + valor2);

    console.log("")

    for(let i = 0; i<10;i++) {

    if(valor2 == valor[i]) {
        console.log("Valor " + valor2 + " encontrado na posição " + (i + 1));
        encontrado = true;
        break;
    }
}

if(!encontrado) {
    console.log("Valor " + valor2 + " não encontrado");
}

console.log("")

    return false;

}