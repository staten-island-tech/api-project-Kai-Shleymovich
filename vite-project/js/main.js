
/*  const URL = '"https://www.dnd5eapi.co/api/ability-scores/cha"';
async function getData(URL){
 try {
  const response = await fetch(URL);
  console.log(response);
  if( response.status !=200){
      throw new Error(response.statusText)
  }

  const data = await response.json();
  document.querySelector('h1').textContent = data.content;
  document.querySelector('h2').textContent = data.author;  
} catch (error) {
  documnet.querySelector('h1').textContent = error;
  documnet.querySelector('h1').textContent = 'please search for something else';
}

}
getData(URL);  */

function testAPI(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        console.log("API is properly incorporated");
      } else {
        console.error("API is not properly incorporated");
      }
    })
    .catch((error) => {
      console.error("Error occurred while testing the API:", error);
    });
}

// Usage example
const apiUrl = "https://www.dnd5eapi.co/api/ability-scores/cha";
testAPI(apiUrl);
