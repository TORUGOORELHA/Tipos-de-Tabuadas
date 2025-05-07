function tabuada() {
    // Declaração de variáveis
    let continuar = true;
    let tabuada, contador, resultado, limite;
    let saidaTabuada;
    let resposta;
 
 
    while (continuar) {
        // Entrada de dados
        tabuada = Number(prompt("Qual tabuada você deseja resolver?"));
        limite = Number(prompt("Digite o limite da tabuada?"))
       
        // Inicialização de variáveis para cada nova tabuada
        contador = 0;
        saidaTabuada = "";
 
        // Geração da tabuada de 0 a 10
        while (contador <= limite) {
            //Calculo dos dados
            resultado = tabuada * contador;
            //Atribuindo valor a variavel (saidaTabuada)
            saidaTabuada += `${tabuada} x ${contador} = ${resultado}\n`;
            //Contador valor + 1 a cada laço
            contador++;
        }
 
        // Exibe a tabuada
        alert(saidaTabuada);
 
        // Pergunta se o usuário quer continuar
        resposta = prompt("Deseja calcular outra tabuada? (s/n)");
        if (resposta !== 's') {
            continuar = false;
            alert("Encerrando o programa. Obrigado!");
        }
    }
}
 
tabuada();
 