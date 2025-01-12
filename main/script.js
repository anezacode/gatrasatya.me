const log = "[4n3z4] ";

document.addEventListener('DOMContentLoaded', () => {
    console.log(log + "Content Loaded.");
    
    const output = [
        "Selamat datang di website personal GatraSatya!",
        "Nama saya Anggatra Satya Putra N. biasa dipanggil Angga/Gatra",
        "Saya lulusan SMK Prestasi Prima dengan prodi Rekayasa Perangkat Lunak",
        "Saya tertarik dalam membuat website sejak SMP",
        "Selain hobi menjadi programmer, saya juga seorang gamer dan remixer",
        "Cita-cita saya ingin menjadi Fullstack Dev, Game Dev, dan membanggakan Orang tua",
        "Terimakasih telah berkunjung ke website saya!"
    ];
    const marquee = document.getElementById('marquee');
    marquee.innerText = output.join(" • ");

    const runText = document.querySelector('.run-text');
    runText.style.width = marquee.scrollWidth + 'px';

    window.addEventListener('resize', () => {
        runText.style.width = marquee.scrollWidth + 'px';
    });
});

function closeBtn() {
    document.getElementById('menu-checkbox').checked = false;
}
