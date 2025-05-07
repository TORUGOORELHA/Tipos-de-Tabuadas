//Declarando Variaveis
let tabuada, contador, resultado;
let saidaTabuada="";
 
//Atribuindo valor a variavel (contador)
contador = 0;
 
//Entrada de dados
//Atribuindo valor a variavel (tabuada)
tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
 
//Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
for (contador=0;contador<=10;contador++) {
    resultado = tabuada * contador;
    if (contador === 0) {
        saidaTabuada = tabuada + "X" + contador + "=" + resultado;
    } else {
        saidaTabuada = `${saidaTabuada} \n ${tabuada} X ${contador} = ${resultado}`; //Template String      
    }    
}

//Escrevendo a variavel (saidaTabuada) para o usuario
alert(saidaTabuada);