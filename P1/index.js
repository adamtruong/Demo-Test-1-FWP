const firstName = document.getElementById("firstName");
const checkButton = document.getElementById("checkButton");
const genderResult = document.getElementById("genderResult");

function submitName() {
    const name = firstName.value;
    if (!name) {
        alert("Please enter a name");
        return;
    }

    fetch (`https://api.genderize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const gender = data.gender;
            genderResult.textContent = `The gender is ${gender}`;
            genderResult.style.color = (gender === "male") ? "white" : "black";
            genderResult.style.backgroundColor = (gender === "male") ? "blue" : "pink";
        })
        .catch(error => {
            console.log("Error fetching:", error);
            alert("Error finding out your gender!")
            
    
});
} 

