function indexOpened() {
    document.getElementById("safety").disabled = false;
    document.getElementById("access").disabled = false;
    var _0x63cb4a = document.getElementById('safety');
    _0x63cb4a.style.cursor = "text";
    var _0x2bb9a3 = document.getElementById("access");
    _0x2bb9a3.style.cursor = "pointer";
    console.log("password = 5500;");
    document.addEventListener("DOMContentLoaded", function () {
        var _0x14bb24 = document.getElementById("safety");
        _0x14bb24.setAttribute("maxlength", '21');
    });
}
function submitPassword() {
    var _0x18c22b = document.getElementById("safety").value;
    var _0x47d8ee = document.getElementById("access");
    if (_0x18c22b != 0x157c) {
        _0x47d8ee.style.backgroundColor = 'tomato';
        setTimeout(function () {
            _0x47d8ee.style.backgroundColor = "white";
        }, 1200);
        return false;
    }
    if (_0x18c22b == '') {
        _0x47d8ee.style.backgroundColor = "tomato";
        setTimeout(function () {
            _0x47d8ee.style.backgroundColor = "white";
        }, 1200);
        return false;
    }
    _0x47d8ee.style.backgroundColor = "lime";
    _0x47d8ee.style.color = "black";
    setTimeout(function () {
        window.location.href = "main.html";
    }, 1200);
    return false;
}