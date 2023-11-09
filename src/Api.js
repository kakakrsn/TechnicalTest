import request from './utils/request';

class Api {
    static urlAPI() {
        return "https://dev.profescipta.co.id/so-api/"
    }

    static getToken(data) {
        let path = `token`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }

    static getList(token) {
        let path = `Order/GetItems`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
}

export default Api