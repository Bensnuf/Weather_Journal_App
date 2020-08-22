/* Global Variables */
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=3f600919bbab6d72305cefa26478e9a7&units=imperial";

// Async function and fetch() for Get request
document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
    const zipCode = document.getElementById("zip").value;

    const howFeeling = document.getElementById("feelings").value;

    getCity(baseURL, zipCode, apiKey).then(function (data) {
        console.log("1st data", data);
        postData("/all", {
            temperature: data.main,
            date: newDate,
            userResponse: howFeeling,
        }).then(updateUI());
    });
}

const getCity = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + key);
    try {
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

const postData = async (url = "http://localhost:8000/all", data = {}) => {
    console.log("2nd data:", data);
    const response = await fetch("http://localhost:8000/all", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newerData = await response.json();
        console.log("newerData", newerData);
        return newerData;
    } catch (error) {
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch("http://localhost:8000/all");
    try {
        const allData = await request.json();
        console.log("allData: ", allData);
        const lastIndex = allData.length - 1;
        document.getElementById("temp").innerHTML =
            allData[lastIndex].temperature;
        document.getElementById("date").innerHTML = allData[lastIndex].date;
        document.getElementById("content").innerHTML =
            allData[lastIndex].userResponse;
    } catch (error) {
        console.log("error", error);
    }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
