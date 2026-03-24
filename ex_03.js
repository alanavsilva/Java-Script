function ganhos_empresa() {

    let ganhoAnual = 0;
    let gastoAnual = 0;
    let saldoAnual = 0;

    for (let i = 1; i = 12; i++) {
        let ganho Number(prompt("Ganho do Mês" + 1));
        let gasto Number(prompt("Ganho do Mês" + 1));

        ganhoAnual += ganho
        gastoAnual += gasto
    }

    saldoAnual = ganhoAnual - gastoAnual

    console.log("Ganho anual:" + ganhoAnual);
    console.log("Gasto anual:" + gastoAnual);
    console.log("Saldo anual:" + saldoAnual);

    if (saldoAnual > 0) {
        console.log("Prejuízo");
    } else {
        console.log
        console.log("Lucro");
    }
}