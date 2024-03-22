const mestoVstavki = document.querySelector(".mesto-vstavki");

let dataValue = fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((dataUsers) => {
    console.log(dataUsers.results);

    let mestoVstavki = document.querySelector(".mesto-vstavki");

    function displayMenu() {
      let displayMenu = "";

      dataUsers.results.forEach(function (item) {
        displayMenu += `
        <button onclick="nazmi(${item.id})" class="border-${item.status}">
        <img src="${item.image}" />
        <p class="name">${item.name}</p>
        <p class="status">${item.status}</p>
      </button>
        `;

        mestoVstavki.innerHTML = displayMenu;
      });
    }
    displayMenu();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function nazmi(id) {
  alert("ID персонажа: " + id);
}

