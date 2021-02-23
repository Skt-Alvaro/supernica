import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import StoreItems from "../components/Store/StoreItems";
import StoreBanner from "../components/Store/StoreBanner";
import { useDispatch } from "react-redux";
import { headerAction } from "../store/actions/headerAction";

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
            <StoreItems />
        </div>
    );
}

StorePage.propTypes = {
    window: PropTypes.func,
};

export default StorePage;

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#15161A",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },
    gridcontainer: {
        justifyContent: "space-between",
    },
    name: {
        position: "absolute",
        right: "20px",
    },
}));
