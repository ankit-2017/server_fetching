import axios from 'axios'
export const FETCH_USER ='fetch_user'
export const FETCH_TITLE ='fetch_title'

export const FetchUser = () => async dispatch =>{
        const res = await axios.get("http://react-ssr-api.herokuapp.com/users")

        dispatch({
            type: FETCH_USER,
            payload: res
        })
}

export const fetchTitle = () => async dispatch => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/todos")

        dispatch({
            type: FETCH_TITLE,
            payload: data
        })
}