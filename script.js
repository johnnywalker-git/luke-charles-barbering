const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday")
const saturday = document.querySelector(".saturday");
const sunday = document.querySelector(".sunday");

let currentDay = new Date().getDay();
console.log(currentDay)

if (currentDay == 0) {
    sunday.style.backgroundColor = "black";
} 

else if (currentDay == 1) {
    monday.style.backgroundColor = "black";
} 

else if (currentDay == 2) {
tuesday.style.backgroundColor = "black";
} 

else if (currentDay == 3) {
    wednesday.style.backgroundColor = "black";
    } 

    else if (currentDay == 4) {
        thursday.style.backgroundColor = "black";
        } 

        else if (currentDay == 5) {
            friday.style.backgroundColor = "black";
            } 

            else if (currentDay == 6) {
                saturday.style.backgroundColor = "black";
                } 
    

