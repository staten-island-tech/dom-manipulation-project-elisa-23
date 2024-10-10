DOMSelectors = {
    cards: document.querySelectorAll(".card"),
    form: document.querySelector("form"),
    input1: document.querySelector("#input1"),
    input2: document.querySelector("#input2"),
    input3: document.querySelector("#input3"),
    container: document.querySelector(".container"),
    removeBtns: document.querySelectorAll(".remove-btn"),
};

function createCard() {
    DOMSelectors.form.addEventListener("submit", function(event) {
        let amountOfCards = [];
        DOMSelectors.cards.forEach((card)=> {
            if (!amountOfCards.includes(card.getAttribute('id'))) {
                amountOfCards.push(card.getAttribute('id'));
            }
        });
        console.log("Form submitted");
        event.preventDefault();
        console.log("Default Action Prevented");
        let inputs = [DOMSelectors.input1.value, DOMSelectors.input2.value, DOMSelectors.input3.value];     /* text.value ==> gets the value inputted by the user */
        console.log(inputs);
        let id;
        if (amountOfCards.length === 0) {
            id = 1;
        } else {
            id = amountOfCards.length + 1;
        }
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
            `<div class="card">
            <h2 class="card-header" id="card${id}">${inputs[0]}</h2>
            <img src="${inputs[1]}" alt="card image" class="card-img">
            <p class="card-desc">${inputs[2]}</p>
            <button class="remove-btn" id="${id}">
                <p class="remove-btn-text">REMOVE</p>
            </button>
        </div>`
        );
        console.log("Card created: #" + id);
    });
}
createCard();

function removeCard() {
    removeBtns = Array.from(DOMSelectors.removeBtns);
    removeBtns.forEach(addEventListener("click", function(event) {
        const id = event.target.getAttribute('id');
        const cardID = "card" + id;
        let card = document.getElementById(cardID);
        card.remove();
        console.log("Card#" + cardID + "removed");
    }));
}

removeCard()