function indexOpened() {
    document.getElementById("safety").disabled = false;
    document.getElementById("access").disabled = false;

    var blocked = document.getElementById("safety");
    blocked.style.cursor = "text";
    var denied = document.getElementById("access");
    denied.style.cursor = "pointer";

    console.log("javascript = ON;");
    console.log("password = 5500;");

    document.addEventListener("DOMContentLoaded", function() {
        var max = document.getElementById("safety");
        max.setAttribute("maxlength", "21");
    });
}

function submitPassword() {
    var pw = document.getElementById("safety").value;
    if (pw != "") {
        if (pw != 5500) {
            console.log("password = false;");
            window.location.reload();
            window.alert("[GS]: Password salah!");
            return false;
        }
        console.log("password = true;");
        window.location.href = "main.html";
        window.alert("[GS]: Password benar!");
        return true;
    }
    console.log("password = undefined;");
    window.location.reload();
    window.alert("[GS]: Password tidak boleh kosong!");
    return false;
}