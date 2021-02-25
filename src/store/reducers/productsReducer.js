import * as types from "../types/productTypes";

const initial_data = {
    loading: false,
    products: [],
    productById: {},
    error: "",
};

export default function productsReducer(state = initial_data, action) {
    switch (action.type) {
        case types.PRODUCT_LOADING:
            return { ...state, loading: true };

        case types.PRODUCT_LOAD:
            return { ...state, loading: false, products: action.payload };

        case types.PRODUCT_ERROR:
            return { ...state, loading: false, error: action.payload };

        //////////////////////////////////////////

        case types.PRODUCT_BY_ID_LOADING:
            return { ...state, loading: true };

        case types.PRODUCT_BY_ID_LOAD:
            return { ...state, loading: false, productById: action.payload };

        case types.PRODUCT_BY_ID_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}