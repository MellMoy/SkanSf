import React from "react";
import Characters from "../media/Characters.svg"

export default function Main() {
    return (
        <>
            <div class="main-content">
                <div class="text">ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ<br/> НА ТАРИФ, НЕОБХОДИМО<br/>АВТОРИЗОВАТЬСЯ.</div>
            </div>
            <div class="image-login">
          <img alt="страница авторизации" src={Characters}/>
            </div>
        </>
    );
}