import pool from '../models/sqlModel.ts';
export default {
    query(qt, params) {
        return new Promise((resolve, reject) => {
            pool.query(queryText, params)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            }) 
        })
    }
}