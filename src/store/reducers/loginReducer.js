import * as loginTypes from "../types/loginTypes";
import * as registerTypes from "../types/registerTypes";
import * as getUserByTokenTypes from "../types/userByTokenTypes";

const initial_data = {
    token: "",
    user: {},
    loading: false,
    error: "",
};

export default function loginReducer(state = initial_data, action) {
    switch (action.type) {
        case loginTypes.LOGIN_LOADING:
            return { ...state, loading: true };

        case registerTypes.REGISTER_LOADING:
            return { ...state, loading: true };

        case getUserByTokenTypes.USER_BY_TOKEN_LOADING:
            return { ...state, loading: true };

        case loginTypes.LOGIN_LOAD:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                error: "",
            };

        case registerTypes.REGISTER_LOAD:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                error: "",
            };

        case getUserByTokenTypes.USER_BY_TOKEN_LOAD:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: "",
            };

        case loginTypes.LOGIN_ERROR:
            return { ...state, error: action.payload, loading: false };

        case registerTypes.REGISTER_ERROR:
            return { ...state, error: action.payload, loading: false };

        case getUserByTokenTypes.USER_BY_TOKEN_ERROR:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
}
