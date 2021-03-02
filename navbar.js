const open = document.getElementsByClassName('menu-open');
const close = document.getElementsByClassName('menu-close');
const navOpen = document.getElementsByClassName('nav-open');

open[0].onclick = function() {
    navOpen[0].style.display = 'inline-block';
    open[0].style.display = 'none';
    close[0].style.display = 'inline-block';

}
close[0].onclick = function() {
    navOpen[0].style.display = 'none';
    open[0].style.display = 'inline-block';
    close[0].style.display = 'none';
}

const openNavHidden = document.querySelector('.m-nav ul li img')
const NavHidden = document.getElementsByClassName('nav-open-hiden');

openNavHidden.onclick = function() {
    if (NavHidden[0].style.display === "flex") {
        NavHidden[0].style.display = 'none';
        NavHidden[1].style.display = 'none';
        NavHidden[2].style.display = 'none';
        openNavHidden.style.transform = 'rotate(0deg)'
    } else {
        NavHidden[0].style.display = 'flex';
        NavHidden[1].style.display = 'flex';
        NavHidden[2].style.display = 'flex';
        openNavHidden.style.transform = 'rotate(180deg)';
    }
}