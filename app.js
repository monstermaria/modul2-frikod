let globalColor = "lightblue";

(function () {
    function dispatchColorEvent(color) {
        // create custom event
        const colorEvent = new CustomEvent("change-color", {
            detail: { color: color }
        });

        // find all elements and dispatch the new color event
        document
            .querySelectorAll("*")
            .forEach((element) => element.dispatchEvent(colorEvent));
    }

    // get a handle on body
    const body = document.querySelector("body");

    // create a header
    const header = document.createElement("h2");
    header.innerText = "Modul 2 - koda fritt";
    body.appendChild(header);

    // create two paragrafs
    const p1 = document.createElement("p");
    p1.innerText = "Det här är paragraf 1";
    body.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = "Det här är paragraf 2";
    body.appendChild(p2);

    // create buttons
    const button1 = document.createElement("button");
    button1.innerText = "Ändra färger 1";
    button1.addEventListener("click", (event) => {
        console.log(1);
        dispatchColorEvent(1);
    });
    body.appendChild(button1);

    const button2 = document.createElement("button");
    button2.innerText = "Ändra färger 2";
    button2.addEventListener("click", (event) => {
        console.log(2);
        dispatchColorEvent(2);
    });
    body.appendChild(button2);

    // create color input
    const colorInput = document.createElement("input");
    colorInput.placeholder = "Skriv in en HTML-färg";
    colorInput.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            globalColor = event.target.value;
            event.target.value = "";
            console.log("New color: " + globalColor);
            dispatchColorEvent();
        }
    });
    body.appendChild(colorInput);

    p1.addEventListener("change-color", (event) => {
        const color = event.detail.color;
        //console.log(event.detail);
        if (color === 1) {
            event.target.style.backgroundColor = "pink";
        } else if (color === 2) {
            event.target.style.backgroundColor = "lightgreen";
        } else {
            globalColor && (event.target.style.backgroundColor = globalColor);
        }
    });

    p2.addEventListener("change-color", (event) => {
        const color = event.detail.color;
        //console.log(event.detail);
        if (color === 1) {
            event.target.style.backgroundColor = "violet";
        } else if (color === 2) {
            event.target.style.backgroundColor = "lightgrey";
        } else {
            globalColor && (event.target.style.backgroundColor = globalColor);
        }
    });

    console.log("First dispatch");
    dispatchColorEvent(globalColor);
})();
