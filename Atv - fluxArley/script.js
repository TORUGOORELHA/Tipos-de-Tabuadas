function convertion(){
    //Declarando variaveis
        let valorConverter, cotacaoMoeda, valorConvertido;
        let opcaoMoeda;
        let simboloMoeda;
    
        //Entrada de dados
        //Solicitando para o usario Qual a conversão que ele deseja realizar
        opcaoMoeda = Number(window.prompt('Olá! Qual conversão você deseja realizar hoje? 1 - Dólar 2 - Euro'));
        //se (opcaoMoeda) for diferente 1 e (opcaoMoeda) for diferente de 2 ("opção errada") senão continue o codigo
        if (opcaoMoeda != 1 && opcaoMoeda != 2) {
            window.alert("Opção inválida!!!");
        } else{
            //Entrada de dados
            //Pedindo para o usuario por o valor que deseja converter
            valorConverter = Number(window.prompt('Digite o valor que deseja converter: (em R$)'));
            //Se (opcao moeda for igual 1) mostrar prompt ("Digite a contação do dolar: ") se não mostre ("Digite a cotação do Euro: ")
            if (opcaoMoeda == 1) {
                cotacaoMoeda = Number(window.prompt('Digite a cotação do dolar:'));
                simboloMoeda = "U$";
            } else {
                cotacaoMoeda = Number(window.prompt('Digite a cotação do euro:'));
                simboloMoeda = "€$";
            }

            //Processamento de dados e calculo
            valorConvertido = valorConverter / cotacaoMoeda;

            //Mostrar o resultado ("O valor convertido para dolár resultou em " + simboloMoeda + valorConvertido codigo) (fim)
            window.alert("O valor convertido para dolár resultou em " + simboloMoeda + valorConvertido);
        }
    }
    convertion();
    