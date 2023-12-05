import './style.css'
 const URL = 'https://api.spacexdata.com/v5/launches/latest';
async function getData(URL){
 try {
  const response = await fetch(URL);
  console.log(response);
  if( response.status !=200){
      throw new Error(response.statusText)
  }
//take response from server
  const data = await response.json();
  document.querySelector('h1').textContent = data.content;
  document.querySelector('h2').textContent = data.author;  
} catch (error) {
  documnet.querySelector('h1').textContent = error;
  documnet.querySelector('h1').textContent = 'please search for something else';
}

}
getData(URL);
