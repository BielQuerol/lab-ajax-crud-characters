

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function (event) {
//hay que llamar a la API y conseguir los datos,( con axios) then hay que iterar sobre los datos devueltos por la solicitud, para cada carácter hay que crear una
//tarjeta , un elemento DOM. Una vez creada hay que añadir.
axios.get("http://localhost:8000/characters") 
.then((response) => {
  console.log(response);
  response.data.forEach((element)=>   {
const newDiv = document.createElement("div")
newDiv.innerHTML = `<div class="character-info">
<div class="name">Character Name: ${element.name}</div>
<div class="occupation">Character Occupation:${element.occupation}</div>
<div class="cartoon">Is a Cartoon?</div>
<div class="weapon">Character Weapon:${element.weapon}</div>
</div>`
  
  const  characterContainer = document.querySelector(".characters-container")
  characterContainer.appendChild(newDiv)
})


})

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
axios.get("http://localhost:8000/characters/:id")
.then((response) => {
  response.data((element) => {
    const newId = document.createElement()
  }
  )
})
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
