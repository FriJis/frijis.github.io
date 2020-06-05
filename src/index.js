import './style.scss'

window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('disable')
})

window.curSection = 1
const sections = document.querySelectorAll('section')
window.countSections = sections.length

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
            draw()
        })
    })
}

window.deltaTime = {
    minTime: 400,
    setTime() {
        this.cur = new Date()
    },
    delta() {
        if (new Date() - this.cur > this.minTime) {
            this.setTime()
            return true
        } else {
            return false
        }
    }
}

document.addEventListener('wheel', e => { // scrolling
    if (e.deltaY < 0 && curSection > 1 && deltaTime.delta()) {
        curSection -= 1
    }
    if (e.deltaY > 0 && curSection < countSections && deltaTime.delta()) {
        curSection += 1
    }
    draw()
})

document.addEventListener('keydown', e => {
    if (e.code == 'ArrowUp' && curSection > 1) {
        curSection -= 1
    }
    if (e.code == 'ArrowDown' && curSection < countSections) {
        curSection += 1
    }
    draw()
})

// const warning = () => {
//     if(innerWidth < 750 || innerHeight < 770) {
//         document.querySelector('.warning').classList.remove('disable')
//     }
// }
// warning()
drawDots()
draw()
deltaTime.setTime()

