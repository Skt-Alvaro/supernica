import * as headerTypes from "../types/headerTypes";

const initial_data = {
    position: "",
    change_background_color: false,
};

export default function headerReducer(state = initial_data, action) {
    switch (action.type) {
        case headerTypes.HEADER_POSITION:
            return { ...state, position: action.payload };

        case headerTypes.HEADER_BACKGROUND_COLOR_CHANGE:
            return { ...state, change_background_color: action.payload };

        default:
            return state;
    }
}
