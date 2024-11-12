import React from "react";
import mainlogo from "../media/mainlogo.svg";
import mainlogo2 from "../media/mainlogo2.svg";
import rectangle from "../media/rectangle.svg";
import rectangle21 from "../media/rectangle21.svg";
import rectangle22 from "../media/rectangle22.svg";
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
                <i><img src={rectangle} alt="" /></i>
                <p>Высокая и оперативная скорость обработки заявки</p>
            </div>
            <div className="card">
                <i><img src={rectangle21} alt="" /></i>
                <p>Огромная комплексная база <br/>  данных, обеспечивающая <br/> объективный ответ на запрос</p>
            </div>
            <div className="card">
                <i><img src={rectangle22} alt="" /></i>
                <p>Защита конфиденциальных сведений,<br/>  не подлежащих разглашению по федеральному законодательству</p>
            </div>
            <div className="arrow"><img src={right} alt="" /></div>
        </div>
        </div>
      </section>
         

      
    </main>
  );
}
