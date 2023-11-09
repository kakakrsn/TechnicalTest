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
}

export default Api