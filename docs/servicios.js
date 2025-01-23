const menu = document.querySelector('.header_nav');

document.querySelector('.menuboton').addEventListener('click', function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
});
