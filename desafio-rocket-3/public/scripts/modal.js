const modal  = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const closer = document.getElementById("fechar");
const iframe = document.querySelector('iframe');


for (let card of cards) {

    const pageid = card.getAttribute('id');
    card.addEventListener("click" , () => {
        const id = card.getAttribute('id')
        window.location.href=`/cursos/${id}`

    })
    

}