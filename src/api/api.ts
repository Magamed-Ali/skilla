import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango',
    headers: {
        'Authorization': 'Bearer testtoken'
    }
})

export const SkillaApi = {
    getTodoList(dStart: string, dEnd: string){
        return instance.post(`getList?date_start=${dStart}&date_end=${dEnd}&limit=10`)
    },
    getRecord(record: string, id: string){
        return instance.post(`getRecord?record=${record}&partnership_id=${id}`)
    }
}