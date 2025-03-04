const inputPassword = document.getElementById('inputPassword');
const submitBtn = document.getElementById("submitBtn");
const log = "[4n3z4] ";

document.addEventListener("DOMContentLoaded", () => {
    console.log(log + "Content Loaded.");
    document.querySelector(".form-input").style.cursor = "text";
    inputPassword.setAttribute("maxlength", 36);
    inputPassword.disabled = false;
    inputPassword.style.cursor = "text";
    
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
    console.log(log + "Input Enabled.");
});

function submitPassword() {
    const passwordValue = inputPassword.value;

    if (passwordValue !== "5500") {
        console.log(log + "Password Incorrect.");
        submitBtn.style.backgroundColor = '#e50000';
        setTimeout(() => {
            submitBtn.style.backgroundColor = "#aaa";
            inputPassword.value = "";
        }, 500);
        return false;
    }

    if (passwordValue === "") {
        console.log(log + "Password Incorrect.");
        submitBtn.style.backgroundColor = "#e50000";
        setTimeout(() => {
            submitBtn.style.backgroundColor = "#aaa";
            inputPassword.value = "";
        }, 1000);
        return false;
    }

    console.log(log + "Password Correct.");
    submitBtn.style.backgroundColor = "#50cc00";
    setTimeout(() => {
        window.location.href = "main/";
        console.log(log + "Redirecting.");
    }, 1000);
    return false;
}

function pageReturn() {
    window.history.back();
}