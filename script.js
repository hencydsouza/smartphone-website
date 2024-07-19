const nav = document.getElementsByClassName('nav-section')[0]

document.getElementsByClassName('hero-section')[0].style.setProperty('height', `calc(100vh - ${nav.clientHeight}px)`)
// document.getElementsByClassName('feature-section')[0].style.setProperty('height', `calc(100vh - ${nav.clientHeight}px)`)