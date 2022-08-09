let departureDateEntry = prompt("Digite a data de partida (format DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let differenceDate = today - departureDate

let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(choseOption == "1"){
    let secondsOfDeparture = Math.round(differenceDate / 1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
}else if(choseOption == "2"){
    let minutesOfDeparture = Math.round(differenceDate / 1000 / 60)
    alert("Tempo de vôo: " + secondsOfDeparture + " minutos")
}else if(choseOption == "3"){
    let hoursOfDeparture = Math.round(differenceDate / 1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
}else if(choseOption = "3"){
    let daysOfDeparture = Math.round(differenceDate/ 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
}else {
    alert("Opção inválida")
}