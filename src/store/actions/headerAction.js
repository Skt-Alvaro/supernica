import * as headerTypes from "../types/headerTypes";

export const headerAction = (props) => (dispatch) => {
    dispatch({
        type: headerTypes.HEADER_POSITION,
        payload: props.position,
    });
    dispatch({
        type: headerTypes.HEADER_BACKGROUND_COLOR_CHANGE,
        payload: props.backgroundChange,
    });
    dispatch({
        type: headerTypes.HEADER_SHOW_TOOLBAR,
        payload: props.show_right_items,
    });
};
