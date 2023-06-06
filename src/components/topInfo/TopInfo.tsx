import React from 'react';
import {ReactComponent as Search} from '../../images/search.svg';
import {ReactComponent as Img} from '../../images/img.svg';
import {ReactComponent as Vec} from '../../images/Vec.svg';

function TopInfo() {
    return (
        <div className="top-info">
            <div className="container">
                <div className="row flex-wrap">
                    <div className="col-2 date">Среда, 13 окт</div>
                    <div className="col-2">
                        <div className="title">Новые звонки <span className="left"> 20 из 30 шт</span></div>
                        <div className="bottom">
                            <div className="left-bottom"></div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="title">Качество разговоров <span className="center"> 40%</span></div>
                        <div className="bottom">
                            <div className="center-bottom"></div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="title">Конверсия в заказ <span className="right"> 67%</span></div>
                        <div className="bottom">
                            <div className="right-bottom"></div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-between align-items-center">
                        <div>
                            <Search/>
                        </div>
                        <div className="name">ИП Сидорова Александра Михайловна <Vec/></div>
                        <div>
                            <div>
                                <Img style={{marginRight: "15px"}}/>
                                <Vec/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopInfo;