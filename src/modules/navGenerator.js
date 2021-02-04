export default class {
    constructor({ articles, container }) {
        this.navs = []
        this.articles = articles
        this.container = container
    }
    init() {
        this.navs = []
        this.articles.forEach(article => {
            const { offsetTop } = article

            const btn = document.createElement('div')
            btn.classList.add('btn')
            btn.innerHTML = article.querySelector('.h').innerHTML

            this.navs.push({
                offsetTop,
                btn,
                article
            })
        })
        return this.navs
    }
    render() {
        this.navs.forEach(({ btn }) => {
            this.container.append(btn)
        })
        this.renderActiveClass()
        return this
    }
    renderActiveClass() {
        this.navs.forEach(({ offsetTop, btn }) => {
            if (document.documentElement.scrollTop + 100 >= offsetTop) {
                this.navs.forEach(({ btn }) => {
                    btn.classList.remove('active')
                })
                btn.classList.add('active')
            }
        })
    }
}
