document.write('<header class="header" id="logo-menu">\n' +
    '    <div class="logo">\n' +
    '        <a href="../home_page/home_page.html">Nostalgia</a>\n' +
    '    </div>\n' +
    '    <nav class="menu">\n' +
    '        <a href="../time60/60_s.html">60\'s</a>\n' +
    '        <a href="../time70/70_s.html">70\'s</a>\n' +
    '        <a href="../time80/80_s.html">80\'s</a>\n' +
    '        <a href="../time90/90_s.html">90\'s</a>\n' +
    '        <a href="../about/about.html">about</a>\n' +
    '        <div class="indicator"></div>\n' +
    '    </nav>\n' +
    '</header>')

// INTERACTIVE MENU
let links = document.querySelectorAll('.menu a'),
    ind = document.querySelector('.indicator')

// start position
hideInd()

links.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        moveInd(e.target)
    })
})

function moveInd(element) {
    ind.style.width = `${element.offsetWidth}px`
    ind.style.left = `${element.offsetLeft}px`
}

let menu = document.querySelector('.menu')

menu.addEventListener('mouseleave', (e) => {
    hideInd()
})

function hideInd() {
    ind.style.width = `0px`
    ind.style.left = `${links[0].offsetLeft}px`
}
