import { axiosWithAuth } from '../utility/axiosWIthAuth';

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';

export const getProduct = () => {
    return (dispatch => {
        dispatch({type:FETCH_PRODUCT_START})
        axiosWithAuth()
            .get(`/products`)
            .then(res => {
                dispatch({type: FETCH_PRODUCT_SUCCESS, payload: res.data});
                console.log (res.data)
            })
            .catch(err => {
                dispatch({type: FETCH_PRODUCT_FAIL, payload: err.Response.data});
            });
    })
};

export const addProduct = (newProduct) => {
    return (dispatch => {
        dispatch({type: ADD_PRODUCT});
        axiosWithAuth() 
            .post(`/products`, newProduct)
            .then(res => {
                dispatch({type:ADD_PRODUCT_SUCCESS, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FETCH_PRODUCT_FAIL, payload: err.Response.data})
            });
    })
};

export const addProductError = () => {
    return (dispatch => {
        dispatch({type:ADD_PRODUCT_FAIL})
    })
};

