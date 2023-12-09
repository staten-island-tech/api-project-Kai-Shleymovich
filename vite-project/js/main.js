const nameInput = document.getElementById("monsterName");
const form = document.getElementById("form");
const apiUrl = "https://www.dnd5eapi.co/api/monsters";
const output = document.getElementById("output");

function condense(str) {
  return str.split(" ").join("-");
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log(apiUrl + "/" + condense(nameInput.value));
  const data = await getDataFromAPI(apiUrl + "/" + condense(nameInput.value));
  console.log(data);
  const card = makecard(data);
  output.innerHTML = card;
});

async function getDataFromAPI(apiUrl) {
  const res = fetch(apiUrl)
    .then(async (response) => {
      if (response.ok) {
        console.log("API is properly incorporated");
        const info = response.json().then((data) => {
          return data;
        });
        return info;
      } else {
        console.error("API is not properly incorporated");
      }
    })
    .catch((error) => {
      console.error("Error occurred while testing the API:", error);
    });
  return res;
}
function makecard(data) {
  return `<div class="card">
  <h2>${data.name}, CR: ${data.challenge_rating}</h2>
  <h4>${data.size} ${data.type}, ${data.alignment}</h4>
  <img src="${"https://dnd5eapi.co".concat(data.image)}" alt=""/> 
  <h4>AC: ${data.armor_class[0].value}</h4>
  <h4>HP: ${data.hit_points} (${data.hit_points_roll}) </h4>
  <h4>Speed: ${data.speed.walk}</h4>
  <ul>
  <li>STR: ${data.strength}</li>
  <li>DEX: ${data.dexterity}</li>
  <li>CON: ${data.constitution}</li>
  <li>INT: ${data.intelligence}</li>
  <li>WIS: ${data.wisdom}</li>
  <li>RIZ: ${data.charisma}</li>
  </ul>
</div>`;
}
// function insertcard() {
//   data.selector.insertAdjacentHTML("beforeend", makecard());
// }
// insertcard();
// data.nameinput.value = "";
// data.hexinput.value = "";
// data.person_name_input.value = "";

// Usage example

// wait for function to be done. skills.forEach insert adjacent html
