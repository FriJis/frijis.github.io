import './scss/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

ReactDOM.render(<App></App>, document.querySelector('#app'))

// import navG from './modules/navGenerator'
// import cursorM from './modules/cursor'
// import navOpener from './modules/navOpener'

// const articles = document.querySelectorAll('article')
// const navbar = document.querySelector('#navbar')
// const navigator = new navG({ articles, container: navbar })

// const navs = navigator.init()
// navigator.render()
// navs.forEach(({ btn, offsetTop }) => {
//     btn.addEventListener('click', () => {
//         document.documentElement.scrollTo(0, offsetTop)
//     })
// })

// document.addEventListener('scroll', e => {
//     navigator.renderActiveClass()
// })

// const navOp = new navOpener({nav: navbar})

// // navOp.open()
// navOp.initEvent()

// const cursor = new cursorM({
//     style: ['cursor'],
//     activators: document.querySelectorAll('.btn')
// })
// cursor.init()
// setInterval(() => cursor.render(), 20)
