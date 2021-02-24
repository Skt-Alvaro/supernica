import * as types from "../types/userByTokenTypes";

export const getUserByTokenAction = () => async (dispatch) => {
    dispatch({
        type: types.USER_BY_TOKEN_LOADING,
    });
    try {
        const url = process.env.REACT_APP_GET_USER_BY_TOKEN_ENDPOINT;
        const req = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const res = await req.json();
        if (res.error) {
            dispatch({
                type: types.USER_BY_TOKEN_ERROR,
                payload: res,
            });
            return { error: true };
        } else {
            dispatch({
                type: types.USER_BY_TOKEN_LOAD,
                payload: res.user,
            });
            return { error: false };
        }
    } catch (error) {
        dispatch({
            type: types.USER_BY_TOKEN_ERROR,
            payload: error.message,
        });
        return { error: true };
    }
};
