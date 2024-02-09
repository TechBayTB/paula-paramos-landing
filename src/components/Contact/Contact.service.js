import axios from 'axios'

export const sendMail = (body) => {
    return new Promise((resolve, reject) => {
        axios.post('https://techbay-email-api.onrender.com/PaulaParamos', body)
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject('Error : ', error)
            })
    })
}