
window.curSection = 1

window.draw = () => {
    document.querySelectorAll('section').forEach(i => {
        i.classList.remove('active')
    })
    document.querySelector(`section.el_${curSection}`).classList.add('active')

    document.querySelectorAll('.dots .dot').forEach(i => {
        i.classList.remove('active')
    })
    document.querySelector(`.dots .dot[page="${curSection}"]`).classList.add('active')
}

document.addEventListener('wheel', e => {
    if (e.deltaY < 0 && curSection > 1) {
        curSection -= 1
    } else if (e.deltaY > 0 && curSection < 6) {
        curSection += 1
    }
    draw()
})

document.querySelectorAll('.dots .dot').forEach(item => {
    item.addEventListener('click', e => {                
        curSection = parseInt(e.target.attributes[1].value)
        draw()
    })
})

draw()

