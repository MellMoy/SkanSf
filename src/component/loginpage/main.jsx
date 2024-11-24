import React from "react";
import Characters from "../media/Characters.svg";
import castlelogo from "../media/castlelogo.svg";

import googlelogo from "../media/googlelogo.svg";
import facebooklogo from "../media/facebooklogo.svg";
import yandexlogo from "../media/yandexlogo.svg";

export default function Main() {
  return (
    <>
      <div className="main-content">
        <div className="text">
          ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ
          <br /> НА ТАРИФ, НЕОБХОДИМО
          <br />
          АВТОРИЗОВАТЬСЯ.
        </div>
      </div>
      <div className="image-login">
        <img alt="страница авторизации" src={Characters} />
      </div>
      <div className="image-castle">
        <img alt="логотип замка" src={castlelogo} />
      </div>
      <div className="container__tabs">
        <div className="tabs">
          <a className="active" href="#">
            {" "}
            Войти{" "}
          </a>
          <a href="#"> Зарегистрироваться </a>
        </div>
        <div className="form-container">
        <div className="form-group">
          <label for="login"> Логин или номер телефона: </label>
          <input className="login" name="login" type="text" />
        </div>
        <div className="form-group">
          <label for="password"> Пароль: </label>
          <input id="password" name="password" type="password" />
        </div>
        <button className="btn">Войти</button>
        <div className="forgot-password">
          <a href="#"> Восстановить пароль </a>
        </div>
        </div>
        <div className="social-login">
          <p>Войти через:</p>
          <img alt="гуугл лого" src={googlelogo} />
          <img alt="фейсбук лого" src={facebooklogo} />
          <img alt="яндекс лого" src={yandexlogo} />
        </div>
      </div>
    </>
  );
}
