import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { Identifiable, UserEndPoints } from './UrlPoint';



export class WebService<T extends Identifiable, K> {
    baseUrl: string
    constructor(url: string) {
        this.baseUrl = url
    }

    async all(suburl: string): Promise<T[]> {
        return axios.get(`${this.baseUrl}/${suburl}`).then(res => res.data).catch(x => console.error)
    }
    async fetch(suburl: string, id: string | number): Promise<T> {
        const res = await axios.get(`${this.baseUrl}/${suburl}/${id}`)
        return new Promise((resolve, reject) => {
            resolve(res.data)
        })
    }

    async post<E extends keyof K>(suburl: E, data: T) {

        const response = await axios.patch(`${this.baseUrl}/${suburl}`, data)
        console.log(response.data)
    }


    async update<E extends keyof K>(suburl: E, data: T) {
        const response = await axios.patch(`${this.baseUrl}/${suburl}/${data.id}`, data)
        console.log(response.data)
    }

}