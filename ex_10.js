function folha_pagamento() {

   alert("Folha de pagamento");
   let nome = prompt("Informe seu nome:");
   let bruto = Number(prompt("Informe seu salário bruto:"));

   let desconto = bruto * 0.08
   let liquido = bruto - desconto

   alert("Folha de pagamento\n" + nome, "Salário bruto: \n" + bruto, "Porcentagem do desconto INSS (8%) aplicada: \n" + desconto, "Salário líquido: " + liquido);

}
