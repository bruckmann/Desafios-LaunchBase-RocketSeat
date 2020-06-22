const modal  = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const closer = document.getElementById("fechar");
const iframe = document.querySelector('iframe');


for (let card of cards) {

    const pageid = card.getAttribute('id');
    card.addEventListener("click" , () => {
    modal.classList.add("active")
    iframe.src=`https://rocketseat.com.br/${pageid}`
    })
    closer.addEventListener("click" , () => {
    modal.classList.remove("active")
    iframe.src = ""
    })
}