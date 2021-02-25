import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import StoreBanner from "../components/Store/StoreBanner";
import { useDispatch } from "react-redux";
import { headerAction } from "../store/actions/headerAction";
import Products from "../components/Products/Products";

function StorePage() {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        const propertys = {
            position: "fixed",
            backgroundChange: true,
            show_right_items: true,
        };
        dispatch(headerAction(propertys));
    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <StoreBanner />
            <Products />
        </div>
    );
}

StorePage.propTypes = {
    window: PropTypes.func,
};

export default StorePage;

const useStyles = makeStyles({
    root: {
        background: "#15161A",
    },
});
