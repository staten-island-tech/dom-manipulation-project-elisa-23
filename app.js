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
            `<div class="card" id="card${id}">
            <h2 class="card-header">${inputs[0]}</h2>
            <img src="${inputs[1]}" alt="card image" class="card-img">
            <p class="card-desc">${inputs[2]}</p>
            <button type="button" class="remove-btn" id="${id}">
                <p class="remove-btn-text">REMOVE</p>
            </button>
        </div>`
        );
        console.log("Card created: #" + id);
        const removeButtons = document.querySelectorAll(".remove-btn");
        removeButtons.forEach((button)=>
        button.addEventListener("click", function(event) {
            event.preventDefault();
            let card = document.getElementById('card'+button.getAttribute('id'));
            console.log("Starting removal of card" + card);
            card.remove();
            console.log("Card removed.")
        }));
    });
}
createCard();