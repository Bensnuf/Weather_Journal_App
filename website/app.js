/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=3f600919bbab6d72305cefa26478e9a7&units=imperial';

// Async function and fetch() for Get request
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipCode = document.getElementById('zip').value;
    getCity(baseURL, zipCode, apiKey)
}

const getCity = async (baseURL, zip, key)=>{  

  const res = await fetch(baseURL+zip+key)    
  try {                                         
    const data = await res.json();
    console.log(data);
    return data;
  }  catch(error) {
    console.log("error", error);
  }
};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();