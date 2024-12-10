import React from "react";

import mans__img from "../media/mans__img.svg"
import mans__imgsf from "../media/mans__imgsf.svg"
import img__main from "../media/img__main.svg"

export default function Main() {
  return (
    <main className="container__results">
      <div className="container__results__main">
        <div className="results__header__h1">Ищем. Скоро<br/>будут результаты</div>
        <div className="results__subheader__p">
          Поиск может занять некоторое время,<br/>просим сохранять терпение.
        </div>
        <div className="results__image-container">
        <img alt="" src={img__main} />
        </div>

        <div className="results__summary__h1">Общая сводка</div>
        <div className="results__found__p">Найдено 4 221 вариантов</div>
        <div className="results__table-container">
          
          <table className="results__table">
            <thead>
              <tr>
                <th>Период</th>
                <th>10.09.2021</th>
                <th>13.09.2021</th>
                <th>17.09.2021</th>
                <th>20.09.2021</th>
                <th>12.10.2021</th>
                <th>15.10.2021</th>
                <th>16.10.2021</th>
                <th>17.10.2021</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Всего</td>
                <td>5</td>
                <td>2</td>
                <td>6</td>
                <td>8</td>
                <td>1</td>
                <td>10</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Риски</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div className="Result__h1">СПИСОК ДОКУМЕНТОВ</div>
        <div className="Result__container__card">
      
      <div className="Result__card__1">
        <div className="Result__card-header">
          <div className="Result__data" >13.09.2021</div>
          <div className="Result__post" >Комсомольская правда KP.RU</div>
        </div>
        <div className="Result__card-title">
          Скиллфэктори - лучшая онлайн-школа <br/> для будущих айтишников
        </div>
        <div className="Result__card-tag"><p>Технические новости</p></div>
        <img alt="Изображение онлайн-школы Скиллфэктори" className="card-image" src={mans__img}/>
        <div className="Result__card-content__p">
          SkillFactory — школа для всех, кто хочет изменить свою карьеру и
          жизнь. С 2016 года обучение прошло 20 000+ человек из 40 стран с 4
          континентов, самому взрослому студенту сейчас 86 лет. Выпускники
          работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru,
          Яндекс, Ozon и других топовых компаниях.
          <br />
          <br />
          Принципы SkillFactory: акцент на практике, забота о студентах и
          ориентация на трудоустройство. 80% обучения — выполнение упражнений и
          реальных проектов. Каждого студента поддерживают менторы, 2
          саппорт-линии и комьюнити курса. А карьерный центр помогает составить
          резюме, подготовиться к собеседованиям и познакомиться с
          IT-рекрутерами.
        </div>
        <div className="Result__card-footer">
          <button className="Result__card-button"><p>Читать в источнике</p></button>
          <div className="Result__card-words"><p>2 543 слова</p></div>
        </div>
      </div>
      <div className="Result__card__2">
        <div className="Result__card-header2">
          <div className="Result__data2" >15.10.2021</div>
          <div className="Result__post2" >VC.RU</div>
        </div>
        <div className="Result__card-title__2">
          Работа в Data Science в 2022 году:<br/>тренды, навыки и обзор
          специализаций
        </div>
        <div className="Result__card-tag2"><p>Технические новости</p></div>
        <img alt="Изображение связанно со Skillfactory" className="card-image2" src={mans__imgsf}/>
        <div className="Result__card-content__p2">
          Кто такой Data Scientist и чем он занимается? Data Scientist — это
          специалист, который работает с большими массивами данных, чтобы с их
          помощью решить задачи бизнеса. Простой пример использования больших
          данных и искусственного интеллекта — умные ленты в социальных сетях.
          На основе ваших просмотров и лайков алгоритм выдает рекомендации с
          контентом, который может быть вам интересен. Эту модель создал и
          обучил дата-сайентист, и скорее всего, не один.
          <br />
          <br />
          В небольших компаниях и стартапах дата-сайентист делает все: собирает
          и очищает данные, создает математическую модель для их анализа,
          тестирует ее и презентует готовое решение бизнесу.
        </div>
        <div className="Result__card-footer2">
          <button className="Result__card-button2"><p>Читать в источнике</p></button>
          <div className="Result__card-words2"><p>3 233 слова</p></div>
        </div>
      </div>
    </div>
    <button className="Result__load-more2"><p>Показать больше</p></button>
      </div>
    </main>
  );
}
