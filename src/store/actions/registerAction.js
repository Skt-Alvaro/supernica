import * as types from "../types/registerTypes";

export const registerAction = (request) => async (dispatch) => {
    dispatch({
        type: types.REGISTER_LOADING,
    });
    try {
        const url = process.env.REACT_APP_REGISTER_ENDPOINT;
        const req = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });
        const res = await req.json();
        if (res.error) {
            dispatch({
                type: types.REGISTER_ERROR,
                payload: res.error,
            });
            return {
                error: true,
                errorMsg: "Este email ya está registrado, intenta con otro",
            };
        } else {
            localStorage.setItem("token", res.token);
            dispatch({
                type: types.REGISTER_LOAD,
                payload: res.response,
            });
            return { error: false };
        }
    } catch (error) {
        dispatch({
            type: types.REGISTER_ERROR,
            payload: error.message,
        });
        return { error: true };
    }
};
