/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=3f600919bbab6d72305cefa26478e9a7&units=imperial";


// Async function and fetch() for Get request
document.getElementById("generate").addEventListener("click", performAction);

// postData('/addAnimal', {animal:data.animal, fact: data.fact} )

function performAction(e) {
const zipCode = document.getElementById("zip").value; //.value grabs what's typed inside the "zip" and not
                                                      // the box itself, it must be inside the function so
                                                      // it always grabs the most recently typed zip
    getCity(baseURL, zipCode, apiKey);
}

const getCity = async (x, y, z) => {  // can be changed from (baseURL, zip, key) and work fine,
                                      // what's actually typed here 100% doesn't matter cause the function
                                      // performAction() places what we actually want when we click
  const res = await fetch(x + y + z);
    try {
        const data = await res.json();
        console.log(data);
        // return data;               // may not need, still requires testing
    } catch (error) {
        console.log("error", error);
    }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
