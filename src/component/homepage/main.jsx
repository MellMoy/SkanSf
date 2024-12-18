import React from "react";
import mainlogo from "../media/mainlogo.svg";
import mainlogo2 from "../media/mainlogo2.svg";
import search from "../media/search.svg";
import maskgroup2 from "../media/maskgroup2.svg";
import maskgroup from "../media/maskgroup.svg";
import right from "../media/right.svg";
import left from "../media/left.svg";
import ok from "../media/ok.svg";
import lamp from "../media/lamp.svg";
import dartslogo from "../media/dartslogo.svg"; 
import computerlogo from "../media/computerlogo.svg"




export default function Main() {
  return (
    <main>
      <div class="container">
        <div class="text-content">
          <h1>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ <br/>О КОМПАНИИ <br/>ПО ЕГО ИНН</h1>
          <p>
            Комплексный анализ публикаций, получение данных <br/>в формате PDF на
            электронную почту.
          </p>
          <button>Запросить данные</button>
        </div>
        <div class="image-content">
          <img alt="Illustration of a persons" src={mainlogo}/>
        </div>
      </div>

      <section className="benefits">
        <div className="benefits__wrap">
          <h1 className="benefits__title">ПОЧЕМУ ИМЕННО МЫ</h1>
          
          <div class="cards">
            <div className="arrow"><img src={left} alt="" /></div>

            <div className="card">
                <i><img src={search}alt="" /></i>
                <p>Высокая и оперативная скорость обработки заявки</p>
            </div>
            <div className="card">
                <i><img src={maskgroup} alt="" /></i>
                <p>Огромная комплексная база <br/>  данных, обеспечивающая <br/> объективный ответ на запрос</p>
            </div>
            <div className="card">
                <i><img src={maskgroup2} alt="" /></i>
                <p>Защита конфиденциальных сведений,<br/>  не подлежащих разглашению по федеральному законодательству</p>
            </div>
            <div className="arrow"><img src={right} alt="" /></div>
        </div>
        <div className="container__img">
          <img alt="Illustration of a persons" src={mainlogo2}/>
        </div>

          {/* ТАРИФЫ */}


              <div>
              <h1 className="tariiffh1">НАШИ ТАРИФЫ</h1>
    <div className="pricing-container">
          <div className="pricing-card">
            <div className="card-header">
              <div className="icon"><i className="fas fa-lightbulb"><img src={lamp} alt="лампочка" /></i></div>
              <h2>Beginner</h2>
              <p className="card-h1">Для небольшого исследования</p>
              <div className="price">799 ₽</div>
              <div className="old-price">1 200 ₽</div>
              <div className="current-plan">Текущий тариф</div>
              <p className="current-beginner">или 150 ₽/мес. при рассрочке на 24 мес.</p>
              <div className="tariff-opencart1">В тариф входит:</div>
              <ul className="current-beginnertext">
                  <li><i className="fas fa-check"></i><img src={ok} alt="галочка" />Безлимитная история запросов</li>
                  <li><i className="fas fa-check"></i><img src={ok} alt="галочка" />Безопасная сделка</li>
                  <li><i className="fas fa-check"></i><img src={ok} alt="галочка" />Поддержка 24/7</li>
              </ul>
              <button className="cta-button">Перейти в личный кабинет</button>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <div className="`icon"><i className="fas fa-bullseye"><img src={dartslogo} alt="мишень" /></i></div>
              <h2>Pro</h2>
              <p className="card-h1">Для HR и фрилансеров</p>
              <div className="price2">1 299 ₽</div>
              <div className="old-price2">2 600 ₽</div>
              <p className="current-beginner2">или 279 ₽/мес. при рассрочке на 24 мес.</p>
              <div className="tariff-opencart2">В тариф входит:</div>
              <ul className="current-beginnertext2">
                  <li><i className="fas fa-check2"></i><img src={ok} alt="галочка" />Все пункты тарифа Beginner</li>
                  <li><i className="fas fa-check2"></i><img src={ok} alt="галочка" />Экспорт истории</li>
                  <li><i className="fas fa-check2"></i><img src={ok} alt="галочка" />Рекомендации по приоритетам</li>
              </ul>
              <button className="cta-button2">Подробнее</button>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <div className="icon"><i className="fas fa-laptop"><img src={computerlogo} alt="мишень" /></i></div>
              <h2 className="card-h3" >Business</h2>
              <p className="card-p3">Для корпоративных клиентов</p>
              <div className="price3">2 379 ₽</div>
              <div className="old-price3">3 700 ₽</div>
              <div className="tariff-opencart3">В тариф входит:</div>
              <ul className="current-beginnertext3">
                  <li><i className="fas fa-check3"></i><img src={ok} alt="галочка" />Все пункты тарифа Pro</li>
                  <li><i className="fas fa-check3"></i><img src={ok} alt="галочка" />Безлимитное количество запросов</li>
                  <li><i className="fas fa-check3"></i><img src={ok} alt="галочка" />Приоритетная поддержка</li>
              </ul>
              <button className="cta-button3">Подробнее</button>
            </div>
          </div>
      </div>
                </div>
        
        </div>
      </section>
         

      
    </main>
  );
}
