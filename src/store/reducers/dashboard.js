import * as actionsTypes from '../actions'


const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const reducerDashboard = (state = initialState, action) =>{

    switch(action.type){
        case actionsTypes.GET_DASHBOARD_DATA_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case actionsTypes.GET_DASHBOARD_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                data: action.payload.data
            }
        case actionsTypes.GET_DASHBOARD_DATA_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }

    
}
