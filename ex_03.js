function saldo_empresa() {

    let ganhoAnual = 0;
    let gastoAnual = 0;
    let saldoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganho = Number(prompt("Ganho do Mês " + i));
        let gasto = Number(prompt("Gasto do Mês " + i));

        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    saldoAnual = ganhoAnual - gastoAnual;

    alert("Ganho anual: " + ganhoAnual);
    alert("Gasto anual: " + gastoAnual);
    alert("Saldo anual: " + saldoAnual);

    if (saldoAnual < 0) {
        alert("Prejuízo");
    } else {
        alert("Lucro");
    }
}