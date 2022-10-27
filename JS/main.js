const kilometri = prompt("Inserire numero di chilometri da percorrere")
const eta = prompt("Inserire l'età del passeggero")

let prezzoIniziale = kilometri*0.21

if (eta > 65) {
    let sconto = prezzoIniziale*0.4

    let prezzoFinale = prezzoIniziale - sconto

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoFinale}€`

} else if (eta < 18) {
    let sconto = prezzoIniziale*0.2

    let prezzoFinale = prezzoIniziale - sconto

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoFinale}€`

} else {
    let sconto = 0

    let prezzoFinale = prezzoIniziale - sconto

    const paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzoFinale}€`

}

