import {GET_DATA, ADD_DATA, DELETE_DATA, LOADING_DATA} from './types'
import axios from 'axios'

export const getData = () => dispatch =>{
    axios.get('/api/processes')
        .then(res => dispatch({
            type: GET_DATA,
            payload: res.data
            })
        ) 
}
export const addData = (data) => dispatch =>{
    axios.post('/api/processes',data).then(res =>
        dispatch({
            type : ADD_DATA,
            payload: res.data
        }))
 }
    
 export const deleteData = id => dispatch =>{
    axios.delete(`/api/processes/${id}`).then(res=> dispatch({
        type : DELETE_DATA,
        payload: id
    }))
 }

export const setDataLoading = () => {
    return {
        type : LOADING_DATA
    }
}