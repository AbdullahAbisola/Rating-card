// Variables

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const home = document.querySelector(".race-card");
const thanks = document.querySelector(".thanks");
const submitBtn = document.querySelector(".submit");
const buttons = [num1, num2, num3, num4, num5];
const result = document.querySelector('#generate')
let selectedValue; 
// This global variable (selectedValue) will let us access the value of what was 
//selected in the number click event in other click events


for (const num of buttons) {
  num.addEventListener("click", (event) => {
    //☝️ Loops through each individual button in the array 
    //👇reset all buttons to their original state
    for (const btnConfigure of buttons) {
      btnConfigure.style.backgroundColor = "var(--dblue)";
      btnConfigure.style.color = "var(--white)";
    }
    //☝️ 2nd loop configure the style for each button

    // change the clicked button's state
    event.target.style.backgroundColor = "var(--orange-button)";
    event.target.style.color = "var(--white)";

    // get the value of the button that was clicked
    const value = event.target.getAttribute("data-num")
    selectedValue = value
    console.log(`Button  ${value} was clicked.`);

    // Using the target property we are able to change the button's state
  });
}

submitBtn.addEventListener("click",() => {
     home.style.display ="none";
     thanks.style.display = "flex";

     result.textContent = `You selected ${selectedValue} out of 5`
})

// So basically it's like this scenario:
// Make a loop that listens to all the buttons using a prop and then initializes their 
// styles in another loop that also has a prop like the first loop
// then outside the 2nd loop but inside the 1st loop we can set the colour to change
// by using the event prop we passed in and the target property