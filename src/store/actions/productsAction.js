import * as types from "../types/productTypes";

export const productsAction = () => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_LOADING,
    });
    try {
        const req = await fetch(
            process.env.REACT_APP_GET_ALL_PRODUCTS_ENDPOINT,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const res = await req.json();
        if (res.error) {
            dispatch({
                type: types.PRODUCT_ERROR,
                payload: "error 404",
            });
            return { error: true };
        } else {
            dispatch({
                type: types.PRODUCT_LOAD,
                payload: res.response,
            });
            return { error: false };
        }
    } catch (error) {
        dispatch({
            type: types.PRODUCT_ERROR,
            payload: error.message,
        });
        return { error: true };
    }
};
