import { Map } from './Contacts.styled';

export default function Contacts() {
    return (
        <>
            <p>Общество с ограниченнной ответственностью "Рефреш-К"</p>
            <p>223060, Республика Беларусь, Минская обл., Минский р-н, 
Новодворский с/с, д. Большой Тростенец, ул. Западная 43/2, каб. 30.
Р/с BY 69 PJCB 3012 0116141000000 933, БИК PJCBBY2X
ЦБУ 100 ОАО «Приорбанк», г.Минск, ул. Радиальная, 38А 
УНН - 101106873; ОКПО - 37409480
<a href="/">e-mail: refresh@refresh.by</a></p>
        
        <p>Для дополнительной информации вы можете обратиться к нам по телефонам:</p>
        <ul>
            <li>
                <p>тел./факс:</p>
                <a href="/">+375 17 517-65-00</a>
                    </li> 
            <li>
                <p >A1:</p>
                <a href="/"> +375 44 765-02-68</a>
                    </li> 
            <li>
                <p>ПТО:</p>
                <a href="/"> +375 17 517-65-03</a>
                    </li> 
            </ul>
            <Map src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Ad2948fd198b7cef07a4bfb0e7a67e27ec0a247a1f6e1586b79fa6b68649ecada" frameborder="0" allowfullscreen="true" title="map"></Map>
            </>
    )
}