import React from "react";
import logoskan from "../media/logoskan.svg";
import Mask from "../media/Mask.png";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                src={logoskan}
                alt="logo-compaing "
                className="header__logo-pic"
              />
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="" className="header__link">
                  Главная
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  Тарифы
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="container__Box">
            <div className="container__background"></div>
            <div className="container__usedlimit">
              <div className="limit__item">
                <p>Использовано компаний</p>
                <span className="used">34</span>
              </div>
              <div className="limit__item">
                <p className="limits__compain">Лимит по компаниям</p>
                <span className="limit">100</span>
              </div>
            </div>
          </div>
          <div className="header__Results-section">
            <div className="header__reg-block">
              <div className="header__name__Results">Алексей А.</div>
              <a href="/" className="header__Results-button">
                {" "}
                Выйти{" "}
              </a>
            </div>
            <div className="imgResult">
              <img className="header__Mask" src={Mask} alt="фото аккаунта" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
