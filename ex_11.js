function folha_pagamento_2() {

   alert("Folha de pagamento");
   let salario = Number(prompt("Informe seu salário:"));

   if(salario < 1000) {
   let desconto = salario*0.08
   let liquido = salario - desconto
      alert(
      "Folha de pagamento\n" +
      "Salário bruto: " + salario + "\n" +
      "Taxa de desconto: 8% \n" +
      "Desconto calculado: " + desconto + "\n" +
      "Salário líquido: " + liquido
   );
   } else if(salario > 1000 && salario <= 1500) {
   let desconto = (salario*8.5)/100
   let liquido = salario - desconto
   alert(
      "Folha de pagamento\n" +
      "Salário bruto: " + salario + "\n" +
      "Taxa de desconto: 8,5% \n" +
      "Desconto calculado: " + desconto + "\n" +
      "Salário líquido: " + liquido
   );
   }else{
   let desconto = salario*0.09
   let liquido = salario - desconto
   alert(
      "Folha de pagamento\n" +
      "Salário bruto: " + salario + "\n" +
      "Taxa de desconto: 9% \n" +
      "Desconto calculado: " + desconto + "\n" +
      "Salário líquido: " + liquido
   );
   }
   
}
