const form = document.querySelector("form");
const nama = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
const sent = document.querySelector('.submission');
const nav = document.getElementById('menu-checkbox');
const log = "[4n3z4] ";

document.addEventListener('DOMContentLoaded', () => {
    console.log(log + "Content Loaded.");
    nav.disabled = false;
    sent.disabled = false;
    mess.setAttribute('maxlength', '1000');
});

function closeBtn() {
    document.getElementById('menu-checkbox').checked = false;
}

function sendEmail() {
    const notif = document.getElementById("warns");
    if (nama.value == "" || email.value == "" || subject.value == "" || mess.value == "") {
        notif.innerText = "Form tidak boleh kosong!";
        notif.style.display = "block";
        setTimeout(function() {
            notif.style.display = "none";
        }, 1200);
    } else {
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (reg.test(email.value)) {
            const xnama = nama.value;
            const xemail = email.value;
            const xsubject = "<h3>"+ subject.value +"</h3>";
            const xmess = "<p>" + mess.value + "</p>";
            const body = xnama + " (" + xemail + ") " + "<br><br>" + xsubject + "<br>" + xmess;
            const _0x561a17 = {
                'Host': "smtp.elasticemail.com",
                'Username': "anezacode@gmail.com",
                'Password': "3BA30A1F1E6A688E5507AAA589B5D311B4E8",
                'To': 'anezacode@gmail.com',
                'From': "anezacode@gmail.com",
                'Subject': subject.value,
                'Body': body
            };
            Email.send(_0x561a17).then(message => setNotif());
        } else {
            _0x3061b5.innerText = "Masukkan Email yang Valid!";
            _0x3061b5.style.display = "block";
            setTimeout(function() {
                _0x3061b5.style.display = "none";
            }, 1200);
        }
    }
}

function setNotif() {
    console.log(log + "Email has been sent.");
    document.getElementById("form").style.display = "none";
    document.getElementById("catch").style.display = "block";
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
}); 