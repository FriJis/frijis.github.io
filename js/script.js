
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

    document.querySelectorAll('.dots .dot').forEach(item => { //add event
        item.addEventListener('click', e => {
            curSection = parseInt(e.target.getAttribute('page'))
            draw()
        })
    })
}

document.addEventListener('wheel', e => {
    if (e.deltaY < 0 && curSection > 1) {
        curSection -= 1
    } else if (e.deltaY > 0 && curSection < countSections) {
        curSection += 1
    }
    draw()
})

drawDots()
draw()

