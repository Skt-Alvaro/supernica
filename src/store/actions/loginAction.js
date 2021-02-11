import * as types from "../types/loginTypes";

export const loginAction = (request) => async (dispatch) => {
    dispatch({
        type: types.LOGIN_LOADING,
    });

    try {
        const url = "http://127.0.0.1:8000/api/users/login";
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
                type: types.LOGIN_ERROR,
                payload: "Las credenciales son incorrectas",
            });
            return { error: true };
        } else {
            dispatch({
                type: types.LOGIN_LOAD,
                payload: res,
            });
            return { error: false };
        }
    } catch (error) {
        dispatch({
            type: types.LOGIN_ERROR,
            payload: error.message,
        });
        return { error: true };
    }
};
