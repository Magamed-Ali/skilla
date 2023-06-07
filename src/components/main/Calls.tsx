import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../state/store";
import {thinkTodoLists} from "../../state/reducer";
import {ReactComponent as Incoming} from '../../images/incoming.svg';
import {ReactComponent as Outgoing} from '../../images/outgoing.svg';

function Calls() {

    const results = useSelector<AppRootStateType, Array<any>>(state => state.reducer.items)
    const dispatch = useAppDispatch();

    useEffect(()=>{
            dispatch(thinkTodoLists("2022-09-19", "2022-10-30"))

    }, [])

    return (
        <div className="container calls">
            <div className="row calls-rov">
                <div className="col-1"><input type="checkbox"/>Тип</div>
                <div className="col-1">Время</div>
                <div className="col-1">Сотрудник</div>
                <div className="col-2">Звонок</div>
                <div className="col-2">Источник</div>
                <div className="col-2">Оценка</div>
                <div className="col-3 d-flex justify-content-end">Длительность</div>
            </div>
            {
                results.map(item => {

                    return (
                        <div className="row d-flex align-items-center calls-rov">
                            <div className="col-1"><input type="checkbox"/>{item.in_out == "0" ? <Incoming/>:<Outgoing/>}</div>
                            <div className="col-1">{item.date.slice(10, 16)}</div>
                            <div className="col-1"><img src={item.person_avatar} alt=""/></div>
                            <div className="col-2">+{item.partner_data.phone}</div>
                            <div className="col-2">{item.partner_data.name}</div>
                            <div className="col-2">{item.status}</div>
                            <div className="col-3 d-flex justify-content-end">{item.record}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Calls;