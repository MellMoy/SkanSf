import React from "react";
import logoskan from "../media/logoskan.png"





export default function Header() {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                     <img  alt="Company Logo" src={logoskan}/>
                     </div>
                        <div className="nav-links">
                            <a className="glav" href="#">
                                Главная
                            </a>
                            <a className="tarif" href="#">
                                Тарифы
                            </a>
                            <a className="faq" href="#">
                                FAQ
                            </a>
                            <a className="register" href="#">
                                Зарегистрироваться
                            </a>
                                <div className="divider">
                                </div>
                                    <button className="login-btn">
                                         Войти
                                    </button>
                            </div>
            </div>
        </nav>
    );
}