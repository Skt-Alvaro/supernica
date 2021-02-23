import * as headerTypes from "../types/headerTypes";

export const headerAction = (props) => (dispatch) => {
    console.log(props);
    dispatch({
        type: headerTypes.HEADER_POSITION,
        payload: props.position,
    });
    dispatch({
        type: headerTypes.HEADER_BACKGROUND_COLOR_CHANGE,
        payload: props.backgroundChange,
    });
};
