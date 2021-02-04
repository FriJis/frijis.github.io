import React from 'react'
import Nav from './components/nav'

export default function App() {
    return (
        <main>
        <Nav></Nav>
        <section>
            <article className="home">
                <div className="h"><i className="fas fa-home"></i> Главная</div>
            </article>
            <article className="profile">
                <div className="h"><i className="fas fa-user"></i> Профиль</div>
                <img src="img/ava.jpg" className="avatar"/>
                <ul className="information">
                    <li>
                        <div className="title">ФИО</div>
                        <div className="text">Кузьмин Егор Владиславович</div>
                    </li>
                    <li>
                        <div className="title">Дата рождения</div>
                        <div className="text"></div>
                    </li>
                    <li>
                        <div className="title">Дата старта</div>
                        <div className="text"></div>
                    </li>
                    <li>
                        <div className="title">Текущий стаж</div>
                        <div className="text"></div>
                    </li>
                    <li>
                        <div className="title">Основное направление</div>
                        <div className="text">JavaScript, FrontEnd</div>
                    </li>
                </ul>
            </article>
            <article className="technology">
                <div className="h">Технологии</div>
                <div className="block">
                    <h2>Языки</h2>
                    <div className="cards">
                        <div className="card" data-title="javascript">
                            <img src="img/icons/langs/javascript-logo.png" alt=""/>
                        </div>
                        <div className="card" data-title="ES6">
                            <img src="img/icons/langs/es6-logo.png" alt=""/>
                        </div>
                        <div className="card" data-title="CSS3">
                            <img src="img/icons/langs/css3-logo.png" alt=""/>
                        </div>
                        <div className="card" data-title="HTML5">
                            <img src="img/icons/langs/html5-logo.png" alt=""/>
                        </div>
                        <div className="card" data-title="PHP">
                            <img src="img/icons/langs/php-logo.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <h2>Фронтенд</h2>
                    <div className="cards">
                        <div className="card" data-title="Vue">
                            <img src="img/icons/frontend/vue.png" alt=""/>
                        </div>
                        <div className="card" data-title="Vue-router">
                            <img src="img/icons/frontend/vue-router.png" alt=""/>
                        </div>
                        <div className="card" data-title="Vuex">
                            <img src="img/icons/frontend/vuex.png" alt=""/>
                        </div>
                        <div className="card" data-title="Vuetify">
                            <img src="img/icons/frontend/vuetify.png" alt=""/>
                        </div>
                        <div className="card" data-title="React">
                            <img src="img/icons/frontend/react.png" alt=""/>
                        </div>
                        <div className="card" data-title="Webpack">
                            <img src="img/icons/frontend/webpack.png" alt=""/>
                        </div>
                        <div className="card" data-title="SASS">
                            <img src="img/icons/frontend/sass.png" alt=""/>
                        </div>
                        <div className="card" data-title="jQuery">
                            <img src="img/icons/frontend/jquery.png" alt=""/>
                        </div>
                        
                    </div>
                </div>
                <div className="block">
                    <h2>Бэкенд</h2>
                    <div className="cards">
                        <div className="card" data-title="Express">
                            <img src="img/icons/backend/Express.png" alt=""/>
                        </div>
                        <div className="card" data-title="Node.js">
                            <img src="img/icons/backend/node.png" alt=""/>
                        </div>
                        <div className="card" data-title="Laravel">
                            <img src="img/icons/backend/laravel.png" alt=""/>
                        </div>   
                        <div className="card" data-title="Socket.io">
                            <img src="img/icons/backend/71f310f3.jpg" alt=""/>
                        </div> 
                        <div className="card" data-title="yii2">
                            <img src="img/icons/backend/yii2.png" alt=""/>
                        </div>                        
                    </div>
                </div>
                <div className="block">
                    <h2>Инструменты</h2>
                    <div className="cards">
                        <div className="card" data-title="NPM">
                            <img src="img/icons/instruments/npm.png" alt=""/>
                        </div>
                        <div className="card" data-title="VS Code">
                            <img src="img/icons/instruments/sN0gD.png" alt=""/>
                        </div>
                        <div className="card" data-title="GIT">
                            <img src="img/icons/instruments/git-logo.png" alt=""/>
                        </div>
                        <div className="card" data-title="Nodemon">
                            <img src="img/icons/instruments/nodemon.png" alt=""/>
                        </div>
                                               
                    </div>
                </div>
                <div className="block">
                    <h2>Базы данных</h2>
                    <div className="cards">
                        <div className="card" data-title="MongoDB">
                            <img src="img/icons/db/mongo.png" alt=""/>
                        </div>
                        <div className="card" data-title="MySQL">
                            <img src="img/icons/db/MySQL-Logo-Design.png" alt=""/>
                        </div>                    
                    </div>
                </div>
                <div className="block">
                    <h2>Будущее для изучения</h2>
                    <div className="cards">
                        <div className="card" data-title="Docket">
                            <img src="img/icons/future/docker.png" alt=""/>
                        </div>
                        <div className="card" data-title="nw.js">
                            <img src="img/icons/future/nw.png" alt=""/>
                        </div>
                        <div className="card" data-title="JSDoc">
                            <div className="realtime__logo">JSDoc</div>
                        </div>  
                        <div className="card" data-title="SOLID">
                            <div className="realtime__logo">SOLID</div>
                        </div>   
                        <div className="card" data-title="nuxt.js">
                            <img src="img/icons/future/nuxt-icon@2x.png" alt=""/>
                        </div>                    
                    </div>
                </div>
            </article>
            <article className="contacts">
                <div className="h">Контакты</div>
                <div className="block">
                    <div className="item btn">
                        <div className="icon"></div>
                        <div className="title">github</div>
                        <div className="link">https://github.com/FriJis/</div>
                    </div>
                </div>
            </article>
        </section>
    </main>
    )
}