const parallax = document.getElementById('parallax')

window.addEventListener('scroll', parallaxFnc)
function parallaxFnc() {
    let offset = window.scrollY
    parallax.style.backgroundPositionY = `${offset * 0.7}px`
}