let saldo =20000
let transa =[]

function Consultar() {
alert(`si saldo es: $$ ${saldo}`)
}
function ActualizarSaldo() {

    document.getElementById("saldo").innerHTML = `saldo actual es: $$ ${saldo}`
}

function monstrarTransa(){
const transaccionesList = document.getElementById(`Transaciones`);
transaccionesList.innerHTML = '' ;

transa.forEach(transaccion => {
const li = document.createElement('li');
li.innerText = transaccion;
transaccionesList.appendChild(li);
});

    
}

// function monstrarTransa() {
// const TransaccionesList = document.getElementById('Transaciones');
//         transaccionesList.innerHTML = '';
// transa.fotEach(transaccion =>{

//         const li = document.createElement('li')

// li.innierText = transaccion;
// transaccionesList.appendChild(li);

//     });
// }

function Depositar() {

    const cantidad = parseFloat(document.getElementById("cantidad").value)

    if (isNaN(cantidad)|| cantidad <=0) {
        alert("la cantidad a depositar  debe der mayor a 0")
        return;
         }

    saldo += cantidad
    transa.push(`se depositaron ${cantidad}`);
    ActualizarSaldo(); // toso
    monstraTransa();
    alert(`se han depositado $$ ${cantidad}`)

}

function Retirar(){
const cantidad =parseFloat(document.getElementById("cantidad").value)
    if (isNaN(cantidad) || cantidad <=0) {
        alert( "la cantidad a depositar debe ser mayor a 0")
    return;
    }
   
    if (cantidad >saldo ) {
    alert("Los fondos para esta transa, son suficientes")
    return

    }

    saldo-=cantidad
    transa.push(`se retirarn $$ ${cantidad}`)
    ActualizarSaldo(); // Todo
    monstrarTransa();
    alert(`se ha retirado $$ ${cantidad}`)
}