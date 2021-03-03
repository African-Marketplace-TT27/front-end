import { axiosWithAuth } from '../utility/axiosWIthAuth';

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';

export const FETCH_CATEGORY_START = 'FETCH_CATEGORY_START';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAIL = 'FETCH_CATEGORY_FAIL';

export const FETCH_COUNTRY_START = 'FETCH_COUNTRY_START';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAIL = 'FETCH_COUNTRY_FAIL';

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
                console.log("Testing addProduct", res)
                dispatch({type:ADD_PRODUCT_SUCCESS, payload:res.data});
            })
            .catch(err => {
                console.log("test error", err.Response)
                dispatch({type:FETCH_PRODUCT_FAIL, payload: err.Response.data})
            });
    })
};

export const addProductError = () => {
    return (dispatch => {
        dispatch({type:ADD_PRODUCT_FAIL})
    })
};

export const getCategory = () => {
    return (dispatch => {
        dispatch({type:FETCH_CATEGORY_START})
        axiosWithAuth()
            .get(`/categories`)
            .then(res => {
                dispatch({type: FETCH_CATEGORY_SUCCESS, payload: res.data});
                console.log (res.data)
            })
            .catch(err => {
                dispatch({type: FETCH_CATEGORY_FAIL, payload: err.Response.data});
            });
    })
};

export const getCountry = () => {
    return (dispatch => {
        dispatch({type:FETCH_COUNTRY_START})
        axiosWithAuth()
            .get(`/countries`)
            .then(res => {
                dispatch({type: FETCH_COUNTRY_SUCCESS, payload: res.data});
                console.log (res.data)
            })
            .catch(err => {
                dispatch({type: FETCH_COUNTRY_FAIL, payload: err.Response.data});
            });
    })
};
