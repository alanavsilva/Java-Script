function ordem_decrescente() {

    let numeros = [];

    for (let i = 0; i < 4; i++) {

        numeros.push(Number(prompt("Digite um Número:")));

    }
    numeros.sort((a,b) => b - a);
    alert ("Ordem decrescente: " + numeros);
}