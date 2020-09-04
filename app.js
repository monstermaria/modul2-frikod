(function() {
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

    // create two buttons
    const button1 = document.createElement("button");
    button1.innerText = "Ändra färger 1";
    button1.addEventListener("click", (event) => {
        const colorEvent = new CustomEvent("change-color", {detail: {color: 1}});
        console.log(1);
        p1.dispatchEvent(colorEvent);
        p2.dispatchEvent(colorEvent);
    });
    body.appendChild(button1);

    const button2 = document.createElement("button");
    button2.innerText = "Ändra färger 2";
    button2.addEventListener("click", (event) => {
        const colorEvent = new CustomEvent("change-color", {detail: {color: 2}});
        console.log(2);
        document.querySelectorAll("p").forEach((p) => p.dispatchEvent(colorEvent));
    });
    body.appendChild(button2);

    p1.addEventListener("change-color", (event) => {
        const color = event.detail.color;
        //console.log(event.detail);
        if (color === 1) {
            event.target.style.backgroundColor = "pink";
        }
        if (color === 2) {
            event.target.style.backgroundColor = "lightgreen";
        }
    });

    p2.addEventListener("change-color", (event) => {
        const color = event.detail.color;
        //console.log(event.detail);
        if (color === 1) {
            event.target.style.backgroundColor = "violet";
        }
        if (color === 2) {
            event.target.style.backgroundColor = "lightgrey";
        }
    });

    
})();
