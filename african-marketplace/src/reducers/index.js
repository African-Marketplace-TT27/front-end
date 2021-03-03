import {FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, FETCH_CATEGORY_START, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAIL, FETCH_COUNTRY_START, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAIL} from '../actions'
import uuid from 'react-uuid';

export const initialState = {
    products: [],
    categories: [],
    countries: [],
    isFetching: false,
    isFetchingCat: false,
    isFetchingCou: false,
    error: '',
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case(FETCH_PRODUCT_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCH_PRODUCT_SUCCESS):
            return({
                ...state,
                products: action.payload,
                isFetching: false
            })
        case(FETCH_PRODUCT_FAIL):
            return({
                ...state,
                isFetching: true,
                error: "Something is broken..."
            })
        case(ADD_PRODUCT):
            return({
                ...state,
                products: [state.products],
                isFetching: true,
                id: uuid()
            })
        case(ADD_PRODUCT_SUCCESS):
            return({
                ...state,
                products: action.payload,
                isFetching: false
            })
        case(ADD_PRODUCT_FAIL):
            return({
                ...state,
                isFetching: true,
                error: "Oops, it looks like you are missing some product details"
            })
        case(FETCH_CATEGORY_START):
            return({
                ...state,
                isFetchingCat: true,
                error: ''
            })
        case(FETCH_CATEGORY_SUCCESS):
            return({
                ...state,
                categories: action.payload,
                isFetchingCat: false
            })
        case(FETCH_CATEGORY_FAIL):
            return({
                ...state,
                isFetchingCat: true,
                error: "Fetching categories is broken..."
            })
        case(FETCH_COUNTRY_START):
            return({
                ...state,
                isFetchingCou: true,
                error: ''
            })
        case(FETCH_COUNTRY_SUCCESS):
            return({
                ...state,
                countries: action.payload,
                isFetchingCou: false
            })
        case(FETCH_COUNTRY_FAIL):
            return({
                ...state,
                isFetchingCou: true,
                error: "Fetching countries is broken..."
            })
        default:
            return state;
    }
}
    export default reducer;
