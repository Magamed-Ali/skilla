import React from 'react';
import Logo0 from '../../images/logo.png';
import {ReactComponent as Logo} from '../../images/Vector.svg';
import {ReactComponent as Logo1} from '../../images/Vector1.svg';
import {ReactComponent as Logo2} from '../../images/Vector2.svg';
import {ReactComponent as Logo3} from '../../images/Vector3.svg';
import {ReactComponent as Logo4} from '../../images/Vector4.svg';
import {ReactComponent as Logo5} from '../../images/Vector5.svg';
import {ReactComponent as Logo6} from '../../images/Vector6.svg';
import {ReactComponent as Logo7} from '../../images/Vector7.svg';
import {ReactComponent as Logo8} from '../../images/Vector8.svg';
import {ReactComponent as Logo9} from '../../images/Vector9.svg';


function NavBar() {
    return (
        <div className="nav-bar">
            <img src={Logo0} alt="My Image" />
            <ul>
                <li><Logo/>Итоги</li>

                <li><Logo1/>Заказы</li>

                <li><Logo2/>Сообщения</li>

                <li className="logo"><Logo3 />Звонки</li>

                <li><Logo4/>Контрагенты</li>

                <li><Logo5/>Документы</li>

                <li><Logo6/>Исполнители</li>

                <li><Logo7/>Отчеты</li>

                <li><Logo8/>База знаний</li>

                <li><Logo9 />Настройки</li>
            </ul>
        </div>
    );
}

export default NavBar;