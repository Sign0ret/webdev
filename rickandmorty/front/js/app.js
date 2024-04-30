document.getElementById("fetchRickById").addEventListener("click", () => {
    const id = document.getElementById("rickId").value;
    console.log('id:',id)
    axios.get(`http://localhost:3000/rick/${id}`)
        .then(response => {
            const character = response.data;
            const container = document.getElementById("output");
            container.appendChild(renderCharacter(character));
        })
})
    
function renderCharacter(character) {
    const card = document.createElement('div')
    card.className = "card col-sm-3"

    const img = document.createElement('img')
    img.className = "card-img-top"
    img.src = character.image

    // TODO get all info

    card.appendChild(img)
    
    return card
}