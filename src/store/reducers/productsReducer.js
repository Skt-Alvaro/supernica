import * as types from "../types/productTypes";

const initial_data = {
    loading: false,
    products: [],
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

        default:
            return state;
    }
}
