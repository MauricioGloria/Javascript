var options = ["Piedra", "Papel", "Tijeras"];
var machine = options[Math.floor(Math.random() * 3)];
var user = prompt('Que eliges, Piedra, Papel o Tijeras?')

switch (true) {
    case (user === machine):
        console.log("Empate")
        break;
    case (user === "Papel" && machine === "Piedra"):
        console.log("Ganaste")
        break;
    case (user === "Tijeras" && machine === "Papel"):
        console.log("Ganaste")
        break;
    case (user === "Piedra" && machine === "Tijeras"):
        console.log("Ganaste")
        break;
    default:
        console.log("Perdiste");


}