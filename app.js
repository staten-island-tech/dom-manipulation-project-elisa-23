DOMSelectors = {
    form: document.querySelector("form"),
    input1: document.querySelector("#value1"),
    input2: document.querySelector("#value2"),
    input3: document.querySelector("#value3"),
};

function inputCollector() {
    DOMSelectors.form.addEventListener("submit", function(event) {
        console.log("Form submitted");
        event.preventDefault();
        console.log("Default Action Prevented");
        let inputs = [DOMSelectors.input1.value, DOMSelectors.input2.value, DOMSelectors.input3.value];     /* text.value ==> gets the value inputted by the user */
        console.log(inputs);
    });
}

inputCollector();