function vogal_consoante() {

    let vogal = "A";
    let vogal2 = "E";
    let vogal3 = "I";
    let vogal4 = "O";
    let vogal5 = "U";
    let letra;

     letra = prompt("Digite uma letra:");

     if ((letra == vogal)||(letra == vogal2)||(letra == vogal3)||(letra == vogal4)||(letra == vogal5)) {
        alert("Essa letra é uma vogal");
     }else{
        alert("Essa letra é uma consoante");
     }

}
