class CuentaBancaria {
    constructor(saldoInicial){
        this.saldo = saldoInicial;
    }
    depositar(cantidad){
        this.saldo += cantidad;
    }
    retirar(cantidad){
        if (cantidad <= this.saldo){
            this.saldo -= cantidad;
            return cantidad;
        }else{
            return 'Fondos Insuficientes';
        }
    }

    verSaldo(){

        return this.saldo
    }
}

const cuenta = new CuentaBancaria(1000);
document.getElementById('transactionForm').addEventListener('submit', function(event){
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionType = document.getElementById('transactionType').value;

    if (transactionType === 'deposit'){
        cuenta.depositar(amount);
    }else if (transactionType === 'withdrawal'){
        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === 'string'){
            alert(withdrawalResult)
        }
    }

    document.getElementById('output2').innerHTML = `El saldo actual es: ${cuenta.verSaldo()}`;

})
// funcion que muestra el numero en pantalla
function actualizarMonto(amount) {
    document.getElementById('amount').value = amount.toFixed(0);
}

let montoActual = 1000;
actualizarMonto(montoActual);