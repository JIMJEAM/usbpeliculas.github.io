sinop = [
    {
        "id": "01",
        "titulo": "krakens y sirenas",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }];

localStorage.setItem("sinopsis", JSON.stringify(sinop));
sinop =JSON.parse(localStorage.getItem("list"));
sinop.forEach(element => {
    let sinopsis = document.getElementById("sinopsis");
    let div = document.createElement("div");
    div.innerHTML = ` <h3>${element.titulo}</h3>
    <p>${element.descripcion}</p>`;
    sinopsis.appendChild(div);
});


