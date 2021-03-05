import {FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, FETCH_CATEGORY_START, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAIL, FETCH_COUNTRY_START, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAIL, FETCH_TYPE_START, FETCH_TYPE_SUCCESS, FETCH_TYPE_FAIL, FETCH_UNIT_START, FETCH_UNIT_SUCCESS, FETCH_UNIT_FAIL, EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL} from '../actions'
import uuid from 'react-uuid';

export const initialState = {
    products: [],
    categories: [],
    countries: [],
    types: [],
    units: [],
    isFetching: false,
    isFetchingCat: false,
    isFetchingCou: false,
    isFetchingType: false,
    isFetchingUnit: false,
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
                products: [state.products], //[action.payload],
                isFetching: true,
                id: uuid()
            })
        case(ADD_PRODUCT_SUCCESS):
            return({
                ...state,
                products: [...state.products, action.payload],//action.payload //state.products.concat(action.payload),
                isFetching: false
            })
        case(ADD_PRODUCT_FAIL):
            return({
                ...state,
                isFetching: true,
                error: "Oops, it looks like you are missing some product details"
            })
        case(EDIT_PRODUCT):
            return ({
                ...state,
                products: [state.products],
                isFetching: true
            })
        case (EDIT_PRODUCT_SUCCESS):
            return({
                ...state,
                products: [...state.products, action.payload],
                isFetching: false
            })
        case (EDIT_PRODUCT_FAIL):
            return({
                ...state,
                isFetching: true,
                error: 'Oops, error man'
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
        case(FETCH_TYPE_START):
            return({
                ...state,
                isFetchingType: true,
                error: ''
            })
        case(FETCH_TYPE_SUCCESS):
            return({
                ...state,
                types: action.payload,
                isFetchingType: false
            })
        case(FETCH_TYPE_FAIL):
            return({
                ...state,
                isFetchingType: true,
                error: "Fetching types is broken..."
            })
        case(FETCH_UNIT_START):
            return({
                ...state,
                isFetchingUnit: true,
                error: ''
            })
        case(FETCH_UNIT_SUCCESS):
            return({
                ...state,
                units: action.payload,
                isFetchingUnit: false
            })
        case(FETCH_UNIT_FAIL):
            return({
                ...state,
                isFetchingUnit: true,
                error: "Fetching types is broken..."
            })
        default:
            return state;
    }
}
    export default reducer;
