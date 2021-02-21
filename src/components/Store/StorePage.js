import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import IconButtonC from "../IconButtonC";
import Hello from "../Hello";
import StoreItems from "./StoreItems";
import { useSelector } from "react-redux";
import useOpenDrawer from "../../helpers/useOpenDrawer";
import StoreBanner from "./StoreBanner";

function StorePage(props) {
    const { user } = useSelector((state) => state.user);
    const { window } = props;
    const classes = useStyles();
    const { mobileOpen, handleDrawerToggle, container } = useOpenDrawer(window);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                position="fixed"
                className={classes.appBar}
                icon={<IconButtonC open={handleDrawerToggle} />}
                hello={<Hello name={user.firstname} />}
            />
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