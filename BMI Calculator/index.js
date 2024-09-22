console.log("bmi");

const btn = document.getElementById("btn");
const bmiMessage = document.getElementById("bmi-message");
const message = document.getElementById("message");
btn.addEventListener("click", (e) => {
    let messageContent;
    e.preventDefault();
    const weight = Number(document.getElementById("weight").value);

    const height = Number(document.getElementById("height").value) / 100;
    const bmi = (weight / height ** 2).toFixed(1);
    console.log(bmi);
    bmiMessage.innerHTML = bmi;
    if (bmi < 24.9) {
        message.innerHTML = "healthy";
    } else if (25 < bmi && bmi < 29.9) {
        message.innerHTML = "Overweight";
    } else if (30 < bmi && bmi < 34.9) {
        message.innerHTML = " (low-risk) obesity";
    } else if (35 < bmi && bmi < 39.9) {
        message.innerHTML = "(moderate-risk) obesity";
    } else {
        message.innerHTML = "(high-risk) obesity";
    }

    bmi = 0;
    // message.innerHTML = messageContent;
});
const toggleButton = document.querySelector(".theme-toggle");
const sunIcon = '<i class="fa-solid fa-sun"></i>';
const moonIcon = '<i class="fa-solid fa-moon"></i>';

toggleButton.innerHTML = sunIcon; // Set initial icon

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Change icon based on theme
    if (document.body.classList.contains("dark")) {
        toggleButton.innerHTML = moonIcon; // Change to moon icon in dark theme
    } else {
        toggleButton.innerHTML = sunIcon; // Change to sun icon in light theme
    }
});
