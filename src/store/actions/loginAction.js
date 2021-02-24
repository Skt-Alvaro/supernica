import * as types from "../types/loginTypes";

export const loginAction = (request) => async (dispatch) => {
    dispatch({
        type: types.LOGIN_LOADING,
    });

    try {
        const url = process.env.REACT_APP_LOGIN_ENDPOINT;
        const req = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });
        const res = await req.json();
        if (!res.token) {
            dispatch({
                type: types.LOGIN_ERROR,
                payload: res.error,
            });
            return {
                error: true,
                errorMsg: "El correo y la contraseña son incorrectos",
            };
        } else {
            localStorage.setItem("token", res.token);
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
