import React from "react";
import mainlogo from "../media/mainlogo.svg";

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
    </main>
  );
}
