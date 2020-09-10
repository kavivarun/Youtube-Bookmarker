import { GET_DATA, ADD_DATA, DELETE_DATA, LOADING_DATA} from '../actions/types'

const initialState = {
    datas: [],
    isLoading : false
}

export default function(state= initialState,action){
    switch(action.type){
        case GET_DATA: 
            return{
                ...state,
                datas: action.payload,
                isLoading : false
            }
        case ADD_DATA:
            return{
                ...state,
                datas: [action.payload,...state.datas]
            }
        case DELETE_DATA:
            return{
                ...state,
                datas: state.datas.filter(data=>data._id!==action.payload)
            }
        case LOADING_DATA:
            return{
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}