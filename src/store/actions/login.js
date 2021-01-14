import * as actionTypes from './index'
import * as api from '../../utlis/constants'
import Axios from '../../axiomock/axios'

let axios = new Axios()

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    }
}


const loginSuccess = (token) => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            token: token
        }
    }
}

const loginFail = (error) => {

    return {
        type: actionTypes.LOGIN_FAIL,
        payload: {
            error: error
        }
    }
}

export const login = (userid, password) => {
    return dispatch => {
        dispatch(loginStart())
        let data = {
            username: userid,
            password: password
        }
        axios.post(api.USER_LOGIN, data)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                dispatch(loginSuccess(response.data.token))
            })
            .catch(response => {
                // console.log(error)
                dispatch(loginFail(response.data.message))
            })

    }
}