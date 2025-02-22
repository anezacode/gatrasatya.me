const nav = document.getElementById('menu-checkbox');
const log = "[4n3z4] ";

document.addEventListener('DOMContentLoaded', () => {
    console.log(log + "Content Loaded.");
    nav.disabled = false;
});

function closeBtn() {
    document.getElementById('menu-checkbox').checked = false;
}