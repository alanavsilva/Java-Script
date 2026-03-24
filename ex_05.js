function par_impar() {

    let numeros = [];

    numeros = Number(prompt("Digite um Número:"));

    if (numeros % 2 == 0) {

        alert("Esse número é par")

        numeros++

        alert("Mas agora o número é impar, se tornando: " + numeros);

    } else {

        alert("Esse número é ímpar")

        numeros++

        alert("Mas agora o número é par, se tornando: " + numeros);

    }
}
