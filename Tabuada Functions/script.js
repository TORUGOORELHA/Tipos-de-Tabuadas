//Função que limite a quantidade de tabuadas
function Limite(limite, tabuada){

    //Delclarando variaveis
    let contador, resultado;
    let saidaTabuada;

    //Entrada de dados

       
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
        return saidaTabuada;

}

function Tabuada(tabuadaUsuario){
    // Escopo específico
    let contador = 0; // Inicializando o contador
    let resultado, saidaTabuada = "";

    while (contador <= 10) {    
        // Atribuindo valor à variável resultado
        resultado = tabuadaUsuario * contador;

        if (contador === 0) {
            saidaTabuada = `${tabuadaUsuario} X ${contador} = ${resultado}`;
        } else {
            saidaTabuada += `\n${tabuadaUsuario} X ${contador} = ${resultado}`;     
        }

        contador++; // Incrementa o contador para + 1
    }    
    return saidaTabuada;
}

function main() {
    // Declaração de variáveis
    let continuar = true;
    let tabuada, limite;
    let resposta;
 
 
    while (continuar) {
        // Entrada de dados

        //Entrada de dados
        tabuada = Number(prompt("Qual tabuada você deseja resolver?"));
        limite = Number(prompt("Digite o limite da tabuada?"))

        const resultado = Limite(limite, tabuada);
        console.log(resultado);
        alert(resultado); 
        
        // Pergunta se o usuário quer continuar
        resposta = prompt("Deseja calcular outra tabuada? (s/n)");
        if (resposta !== 's') {
            continuar = false;
            alert("Encerrando o programa. Obrigado!");
        }
    }
}
 
main();
 