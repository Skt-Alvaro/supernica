import * as types from "../types/productTypes";

export const getProductByIdAction = (id) => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_BY_ID_LOADING,
    });
    try {
        const req = await fetch(
            `${process.env.REACT_APP_GET_PRODUCT_BY_ID_ENDPOINT}${id}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const { error, response } = await req.json();

        if (error) {
            dispatch({
                type: types.PRODUCT_BY_ID_ERROR,
                payload: "error 404",
            });
            return { error: true };
        } else {
            dispatch({
                type: types.PRODUCT_BY_ID_LOAD,
                payload: response,
            });
            return { error: false };
        }
    } catch (error) {
        dispatch({
            type: types.PRODUCT_BY_ID_ERROR,
            payload: error.message,
        });
        return { error: true };
    }
};
