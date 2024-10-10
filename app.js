DOMSelectors = {
    form: document.querySelector("form"),
    input1: document.querySelector("#input1"),
    input2: document.querySelector("#input2"),
    input3: document.querySelector("#input3"),
    container: document.querySelector(".container"),
};

function createCard() {
    DOMSelectors.form.addEventListener("submit", function(event) {
        let cardCount = document.querySelectorAll(".card").length;
        console.log("Form submitted");
        event.preventDefault();
        console.log("Default Action Prevented");
        let inputs = [DOMSelectors.input1.value, DOMSelectors.input2.value, DOMSelectors.input3.value];     /* text.value ==> gets the value inputted by the user */
        console.log(inputs);
        let id = cardCount + 1;
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
    DOMSelectors.container.addEventListener("click", function(event){
        const cards = document.querySelectorAll(".card");
        const allRemoveBtns = document.querySelectorAll(".remove-btn");
        const removeBtns = Array.from(allRemoveBtns);
        console.log(removeBtns);
        removeBtns.forEach((button)=>button.addEventListener("click", function(event) {
            const id = button.getAttribute('id');
            const cardID = "card" + id;
            console.log(cardID);
            let arrayOfCards=[];
            if (!arrayOfCards.includes(cards.getAttribute('id'))) {
                arrayOfCards.push(cards.getAttribute('id'));
            }
            arrayOfCards.forEach((card) => { if (card === cardID) {
                if ((arrayOfCards.length) !== -1) {
                    const removeEle = document.getElementById(card);
                    removeEle.html.remove();
                    console.log("Card Removed");
                }
        }});
        }));
    });
}

removeCard();