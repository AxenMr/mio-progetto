function calcolatrice() {
    let num1 = Number(console.log("Inserisci il primo numero:"));
    let operazione = console.log("Inserisci un'operazione (+, -, *, /, **):");
    let num2 = Number(console.log("Inserisci il secondo numero:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Errore: devi inserire numeri validi.");
        return;
    }

    let risultato;

    switch (operazione) {
        case "+":
            risultato = num1 + num2;
            break;
        case "-":
            risultato = num1 - num2;
            break;
        case "*":
            risultato = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Errore: divisione per zero.");
                return;
            }
            risultato = num1 / num2;
            break;
        case "**":
            risultato = num1 ** num2;
            break;
        default:
            console.log("Errore: operazione non valida.");
            return;
    }

    alert("Risultato: " + risultato);
}
