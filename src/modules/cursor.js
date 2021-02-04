export default class {
    constructor(config) {
        this.config = {
            ...{
                style: [],
                activators: [],
                radius: 15,
                activeRadius: 20
            },
            ...config
        }
        this.currentPosition = {
            clientX: 0,
            clientY: 0
        }
        this.mousePosition = {
            clientX: 0,
            clientY: 0
        }

        this.active = false
    }
    init() {
        this.cursor = document.createElement('div')
        this.config.style.forEach(s => this.cursor.classList.add(s));
        this.config.activators.forEach(a => {
            a.addEventListener('mouseenter', e => this.active = true)
            a.addEventListener('mouseleave', e => this.active = false)
        })
        
        document.body.append(this.cursor)
        window.addEventListener('mousemove', ({ clientX, clientY }) => this.mousePosition = { clientX, clientY })
        return this
    }
    render() {
        let radius = this.config.radius
        this.active ? radius = this.config.activeRadius : radius = this.config.radius;

        (['width', 'height']).forEach(s => this.cursor.style[s] = `${radius}px`)

        this.currentPosition = {
            clientX: this.calculator(this.currentPosition.clientX, this.mousePosition.clientX, radius),
            clientY: this.calculator(this.currentPosition.clientY, this.mousePosition.clientY, radius)
        }

        const { clientX, clientY } = this.currentPosition
       
        this.cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) scale(${radius / this.config.radius})`
    }
    calculator(from, to, radius) {
        const diff = to - from - (radius / 2)
        let newPos = from + ((Math.abs(diff) / diff) * Math.abs(diff / 5))
        if (!diff) {
            newPos = to
        }
        return newPos
    }
    
}