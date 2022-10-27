const kilometri = prompt("Inserire numero di chilometri da percorrere")
const eta = prompt("Inserire l'età del passeggero")

let prezzo = kilometri*0.21

const paragrafo = document.getElementById("paragrafo")
paragrafo.innerHTML = `Il prezzo del biglietto è ${prezzo}€`