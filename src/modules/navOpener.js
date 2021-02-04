export default class {
    constructor({ nav, width = 250 }) {
        this.nav = nav
        this.width = width
        console.log({ nav });
    }
    open() {
        this.nav.style.width = `${this.width}px`
    }
    close() {
        this.nav.style.removeProperty('width')
    }
    initEvent() {
        document.addEventListener('mousemove', ({ target }) => {
            if (target == this.nav) {
                this.open()
                return
            }
            this.close()
        })
    }
}