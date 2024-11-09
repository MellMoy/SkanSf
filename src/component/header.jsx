import React from "react";
import logoskan from "../media/logoskan.svg"





export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <a href="/" className="header__logo-link">
                                <img src={logoskan} alt="logo-compaing " className="header__logo-pic" />
                        </a>
                    </div>
                    
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="" className="header__link">Главная</a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__link">Тарифы</a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__link">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__right-section">
                        <div className="header__reg-block">
                            <a href="/" className="header__reg">Зарегистрироваться</a>
                            <div className="header__vertical-divider"></div>
                                <button className="header__login-button"><a href="/">Войти</a></button>
                        </div>
                    </div>  
                </div>
            </div>
        </header>
    );
}
