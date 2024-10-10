DOMSelectors = {
    form: document.querySelector("form"),
    input1: document.querySelector("#input1"),
    input2: document.querySelector("#input2"),
    input3: document.querySelector("#input3"),
    container: document.querySelector(".container")
};

function inputCollector() {
    DOMSelectors.form.addEventListener("submit", function(event) {
        console.log("Form submitted");
        event.preventDefault();
        console.log("Default Action Prevented");
        let inputs = [DOMSelectors.input1.value, DOMSelectors.input2.value, DOMSelectors.input3.value];     /* text.value ==> gets the value inputted by the user */
        console.log(inputs);
        DOMSelectors.container.insertAdjacentElement("beforeend", 
            `<div class="card">
            <h2 class="card-header">${inputs[0]}</h2>
            <img src="${inputs[2]}" alt="card image" class="card-img">
            <p class="card-desc">${inputs[3]}</p>
            <button class="remove-btn">
                <p class="remove-btn-text">REMOVE</p>
            </button>
        </div>`
        );
    });
}

inputCollector();