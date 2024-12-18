import React from "react";
import searchman from "../media/searchman.svg";
import documentlogo from "../media/documentlogo.svg";
import folderslogo from "../media/folderslogo.svg";

export default function Main() {
  return (
    <main className="main__search">
      <div className="container__search">
        <div className="left-section__search">
          <h1 className="seacrh__h1">Найдите необходимые данные в пару кликов.</h1>
          <p className="seach__p">
            Задайте параметры поиска. <br/>Чем больше заполните, тем точнее поиск
          </p>
          <div className="form-container__search">
            <div className="form-group__search">
              <label for="company-inn">ИНН компании *</label>
              <input id="company-inn" placeholder="10 цифр" type="text" />
            </div>
            <div className="form-group__search">
              <h1 className="tonality">Тональность</h1>
              <select id="tonality">
                <option>Любая</option>
                <option>Статусная</option>
                <option>Идеологическая </option>
                <option>Агрессивная  </option>

              </select>
            </div>
            <div className="form-group__search">
              <h2 classNamer="document-count">
                Количество документов в выдаче *
              </h2>
              <input
                id="document-count"
                placeholder="От 1 до 1000"
                type="text"
              />
            </div>
            <div className="form-group__search__pl">
              <h2>Диапазон поиска *</h2>
              <div className="date-range__search__pl">
                <input placeholder="Дата начала" type="text" />
                <input placeholder="Дата конца" type="text" />
              </div>
            </div>

            <div className="form-group__search__checkbox">
              <div className="checkbox-label__search">
                <input type="checkbox" />
                <label>Признак максимальной полноты</label>
              </div>
              <div className="checkbox-label__search">
                <input type="checkbox" />
                
                <label>Упоминания в бизнес-контексте</label>
              </div>
              <div className="checkbox-label__search">
                <input type="checkbox" />
                <label>Главная роль в публикации</label>
              </div>
              <div className="checkbox-label__search">
                <input className= "checkbox1" checked="" type="checkbox" />
                <label className= "checkbox1">Публикации только с риск-факторами</label>
              </div>
              <div className="checkbox-label__search">
                <input className= "checkbox1" checked="" type="checkbox" />
                <label className= "checkbox1">Включать технические новости рынков</label>
              </div>
              <div className="checkbox-label__search">
                <input type="checkbox" />
                <label>Включать анонсы и календари</label>
              </div>
              <div className="checkbox-label__search">
                <input className= "checkbox1" checked="" type="checkbox" />
                <label className= "checkbox1">Включать сводки новостей</label>
              </div>
            </div>
            <div className="form-group__search">
              <button className="submit-btn__search">Поиск</button>
            </div>
            <div className="form-group__search">
              <p className="required-note__search">* Обязательные к заполнению поля</p>
            </div>
          </div>
        </div>
        <div className="right-section__search">
          <div className="container__img__search ">
            <img src={searchman} alt="поиск" />
          </div>
        <div className="container__img__document">
          <img src={documentlogo} alt="документ лого" />
        </div>
        <div className="container__img__folder">
          <img src={folderslogo} alt="фолдер лого" />
        </div>
        </div>
      </div>
    </main>
  );
}
