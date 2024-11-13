import React from "react";
import mainlogo from "../media/mainlogo.svg";
import mainlogo2 from "../media/mainlogo2.svg";
import search from "../media/search.svg";
import maskgroup2 from "../media/maskgroup2.svg";
import maskgroup from "../media/maskgroup.svg";
import right from "../media/right.svg";
import left from "../media/left.svg";

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
              <h1>НАШИ ТАРИФЫ</h1>
    <div class="pricing-container">
        <div class="pricing-card">
            <div class="icon"><i class="fas fa-lightbulb"></i></div>
            <h2>Beginner</h2>
            <p>Для небольшого исследования</p>
            <div class="price">799 ₽</div>
            <div class="old-price">1 200 ₽</div>
            <div class="current-plan">Текущий тариф</div>
            <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
            <ul>
                <li><i class="fas fa-check"></i>Безлимитная история запросов</li>
                <li><i class="fas fa-check"></i>Безопасная сделка</li>
                <li><i class="fas fa-check"></i>Поддержка 24/7</li>
            </ul>
            <button class="cta-button">Перейти в личный кабинет</button>
        </div>
        <div class="pricing-card">
            <div class="icon"><i class="fas fa-bullseye"></i></div>
            <h2>Pro</h2>
            <p>Для HR и фрилансеров</p>
            <div class="price">1 299 ₽</div>
            <div class="old-price">2 600 ₽</div>
            <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
            <ul>
                <li><i class="fas fa-check"></i>Все пункты тарифа Beginner</li>
                <li><i class="fas fa-check"></i>Экспорт истории</li>
                <li><i class="fas fa-check"></i>Рекомендации по приоритетам</li>
            </ul>
            <button>Подробнее</button>
        </div>
        <div class="pricing-card">
            <div class="icon"><i class="fas fa-laptop"></i></div>
            <h2>Business</h2>
            <p>Для корпоративных клиентов</p>
            <div class="price">2 379 ₽</div>
            <div class="old-price">3 700 ₽</div>
            <ul>
                <li><i class="fas fa-check"></i>Все пункты тарифа Pro</li>
                <li><i class="fas fa-check"></i>Безлимитное количество запросов</li>
                <li><i class="fas fa-check"></i>Приоритетная поддержка</li>
            </ul>
            <button>Подробнее</button>
        </div>
    </div>
              </div>
        
        </div>
      </section>
         

      
    </main>
  );
}
