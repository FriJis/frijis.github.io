
window.curSetion = 1

window.draw = () => {
    document.querySelectorAll('section').forEach(i => {
        i.classList.remove('active')
    })
    document.querySelector(`section.el_${curSetion}`).classList.add('active')
}

document.addEventListener('wheel', e => {
    if (e.deltaY < 0 && curSetion > 1) {
        curSetion -= 1
    } else if (e.deltaY > 0 && curSetion < 6) {
        curSetion += 1
    }
    draw()
})
draw()

