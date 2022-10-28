const kilometri = prompt("Inserire numero di chilometri da percorrere")
const eta = prompt("Inserire l'età del passeggero")

const prezzoIniziale = kilometri*0.21

if (eta > 65) {

    const sconto = prezzoIniziale*0.4

    const prezzoFinale = prezzoIniziale - sconto

    const prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

} else if (eta < 18) {
    
    const sconto = prezzoIniziale*0.2

    const prezzoFinale = prezzoIniziale - sconto

    const prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

} else {
    
    const sconto = 0

    const prezzoFinale = prezzoIniziale - sconto

    const prezzoArrotondato = Math.round(prezzoFinale*100)/100

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoArrotondato}€`

}