import './style.scss'

window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('disable')
})

window.curSection = 1
const sections = document.querySelectorAll('section')
const countSections = sections.length

const init = () => {
    sections.forEach((item, index) => {
        if (item.offsetTop <= pageYOffset + (innerHeight / 2)) {
            curSection = index + 1
        }
    })
}
const drawDots = () => {
    //creator
    let dots = document.createElement('div')
    dots.classList.add('dots')
    for (let i = 1; i <= countSections; i++) {
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dot.setAttribute('page', i)
        dots.append(dot)
    }
    document.body.append(dots)
    //creator

    document.querySelectorAll('.dots .dot').forEach(item => { //add event dots
        item.addEventListener('click', e => {
            curSection = parseInt(e.target.getAttribute('page'))
            let y = document.querySelector(`.el_${curSection}`).offsetTop
            window.scroll(0, y)
            draw()
        })
    })
}
const draw = () => {
    sections.forEach(i => {
        i.classList.remove('active')
    })
    document.querySelectorAll('.dots .dot').forEach(i => {
        i.classList.remove('active')
    })

    document.querySelector(`section.el_${curSection}`).classList.add('active')
    document.querySelector(`.dots .dot[page="${curSection}"]`).classList.add('active')
}




window.addEventListener('scroll', e => { // scrolling
    let prevSec = curSection
    init()
    if (prevSec !== curSection) {
        draw()
    }
})

init()
drawDots()
draw()

