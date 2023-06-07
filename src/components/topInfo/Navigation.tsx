import React from 'react';
import {ReactComponent as Balance} from '../../images/Balance.svg';
import {ReactComponent as Left} from '../../images/Left.svg';
import {ReactComponent as Right} from '../../images/Right.svg';
import {ReactComponent as Calendar} from '../../images/calendar.svg';
import {ReactComponent as Search} from '../../images/search.svg';
import {ReactComponent as Vector_bottom} from '../../images/Vector-bottom.svg';

function Navigation() {
    return (
            <div className="container">
                <div className="navigation">
                    <div className="navigation__balance">Баланс: <span>272р</span><Balance style={{width: "18px"}}/></div>
                    <div className="navigation__date"><Left/><Calendar style={{marginLeft: "15px"}}/><span>3 дня</span><Right/></div>
                </div>
                <div className="row">
                    <div className="col-5 p-0 nav-bottom-left">
                        <Search style={{marginRight: "12px"}}/>
                        <span>Поиск по звонкам</span>
                    </div>
                    <div className="col-7 nav-bottom-right">
                        <div><span>Все типы</span><Vector_bottom/></div>
                        <div><span>Все сотрудники</span><Vector_bottom/></div>
                        <div><span>Все звонки</span><Vector_bottom/></div>
                        <div><span>Все источники</span><Vector_bottom/></div>
                        <div><span>Все оценки</span><Vector_bottom/></div>
                        <div><span>Все ошибки</span><Vector_bottom/></div>
                    </div>
                </div>
            </div>




    );
}

export default Navigation;