/* 
Author: Neha
javascript for dogs webpage
*/

//Variables
const breedListUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breed-list");
//When page loads
window.addEventListener("load", displayBreedList);
//Retrieve list of all dog breeds from the API
async function getBreedList(){
    return fetch(breedListUrl).then(response => response.json());
}
//Display dog breed to drop down list
//Function to add dog breeds to drop down list
function displayBreedList(){
    getBreedList().then(function(data){
        for(e in data.message){
            let option = createOption(e);
            breedList.appendChild(option);
        }
    });
}
// Function to create option element as a child to parent element select
function createOption(e){
    let option = document.createElement("option");
    option.textContent = e;
    return option;
}


// Method2
/*function displayBreedList(){
    getBreedList().then(function(data){
        for(e in data.message){
            let option = document.createElement("option");
            option.textContent =e;
            breedList.appendChild(option);
        }
    });
}*/