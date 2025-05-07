function mostrarTabuada() {
    //Declarando variaveis
    const valorDIG = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
 
    //IF se a opção (num) não tiver valor
    if (isNaN(valorDIG)) {
      resultado.innerHTML = "<p>Por favor, insira um número válido.</p>";
      return;
    }
 
    let tabela = "<table border='1' cellpadding='5'><tr><th>Operação</th><th>Resultado</th></tr>";
    for (valortb = 1; valortb <= 10; valortb++) {
      tabela += `<tr><td>${valorDIG} x ${valortb}</td><td>${valorDIG * valortb}</td></tr>`;
    }
    tabela += "</table>";
 
    resultado.innerHTML = tabela;
}