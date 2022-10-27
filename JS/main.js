const kilometri = prompt("Inserire numero di chilometri da percorrere")
const eta = prompt("Inserire l'età del passeggero")

let prezzoIniziale = kilometri*0.21

if (eta > 65) {

    let sconto = prezzoIniziale*0.4

    let prezzoFinale = prezzoIniziale - sconto

    let prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

} else if (eta < 18) {
    
    let sconto = prezzoIniziale*0.2

    let prezzoFinale = prezzoIniziale - sconto

    let prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

} else {
    
    let sconto = 0

    let prezzoFinale = prezzoIniziale - sconto

    let prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

}

