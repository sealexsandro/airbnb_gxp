const url_api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsQuartos = document.querySelector("#cardsQuartos");
dados = [];

async function fecthCardsQuartos() {
    return await fetch(url_api).then(async (r) => await r.json());
}



function renderCards(dataCards) {
    cardsQuartos.innerHTML = " ";
    dataCards.map(moldarCard);
}

function moldarCard(card){
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <img src= "${card.photo}" class="redimensionarImagem" alt="" />
    <div>
        <p id="tipoImovel">
            ${card.property_type}
        </p>
        <pid="nomeImovel">
            ${card.name}
        </p>
        <p>
            <b>R$ ${card.price}</b>/noite
        </p>
    </div>
    `;
    cardsQuartos.appendChild(div);

}
// function renderCard(card) {
//     const div = document.createElement("div");
//     div.style.width = "20rem";
//     div.style.margin = "2rem";
//     div.className = "card";
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src= "${card.photo}" class="card-img-top" alt="" />
//     <div class= "card-body">
//         <h5 class= "card-title">${card.name}</h5>
//         <p class = "card-text">
//             Tipo: ${card.property_type}
//         </p>
//         <p class = "card-text">
//             Preço: ${card.price},00
//         </p>
//     </div>
//     `;
//     cardsQuartos.appendChild(div);
// }

async function main() {
    dados = await fecthCardsQuartos();
    if (dados[0]) {
        renderCards(dados);
    }
}

main();