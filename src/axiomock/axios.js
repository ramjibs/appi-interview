
class Axios {

   async get(url) {
        let data = require("../utlis/constants/data/dashboard.json")
        let response = {
            data: data
        }
        return new Promise((resolve, reject) => {
            resolve(response);
        });

    }

    post(url, data) {
        let userDetail = require("../utlis/constants/data/login.json")
        return new Promise((resolve, reject) => {
            let response = {
                data: {
                    token: true
                }
            }
            if (userDetail.username === data.username && userDetail.password === data.password) {
                resolve(response)
            }

            else {
                let error = {
                    data: {
                        message: 'Not a valid credentails'
                    }
                }
                reject(error)
            }
        })
    }
}

export default Axios