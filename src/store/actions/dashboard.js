import * as actionTypes from './index'
import * as api from '../../utlis/constants'
import Axios from '../../axiomock/axios'

let axios = new Axios()

const dashboardStart = () => {
    return {
        type: actionTypes.GET_DASHBOARD_DATA_START,
    }
}


const dashboardSuccess = (data) => {

    return {
        type: actionTypes.GET_DASHBOARD_DATA_SUCCESS,
        payload: {
            data: data
        }
    }
}

const dashboardFail = (error) => {

    return {
        type: actionTypes.GET_DASHBOARD_DATA_FAIL,
        payload: {
            error: error
        }
    }
}

export const dashboard = () => {
    return dispatch => {
        dispatch(dashboardStart())
        
        axios.get(api.DASHBOARD_DATA)
            .then(response => {
                dispatch(dashboardSuccess(response.data))
            })
            .catch(response => {
                dispatch(dashboardFail(response.data.message))
            })

    }
}