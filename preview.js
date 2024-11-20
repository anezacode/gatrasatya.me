function openPreview(src) {
    var container = document.getElementById('preview-container');
    var image = document.getElementById('preview-image');
    image.src = src;
    container.style.display = 'flex';
    setTimeout(function() {
        container.classList.add('active');
    }, 10);
}

function closePreview() {
    var container = document.getElementById('preview-container');
    container.classList.remove('active');
    setTimeout(function() {
        container.style.display = 'none';
    }, 300);
}