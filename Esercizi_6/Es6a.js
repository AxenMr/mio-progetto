function calcolatrice() {
    let num1 = Number(prompt("Inserisci il primo numero:"));
    let num2 = Number(prompt("Inserisci il secondo numero:"));
    let operazione = prompt("Inserisci un'operazione (+, -, *, /, **):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Errore: devi inserire numeri validi.");
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
                alert("Errore: divisione per zero.");
                return;
            }
            risultato = num1 / num2;
            break;
        case "**":
            risultato = num1 ** num2;
            break;
        default:
            alert("Errore: operazione non valida.");
            return;
    }

    alert("Risultato: " + risultato);
}
