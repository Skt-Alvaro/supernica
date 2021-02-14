import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Header from "./Header";
import IconButtonC from "./IconButtonC";
import Aside from "./Aside";
import Hello from "./Hello";
import StoreItems from "./StoreItems";
import { useSelector } from "react-redux";

function StorePage(props) {
    const { user } = useSelector((state) => state.user);
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                position="fixed"
                className={classes.appBar}
                icon={<IconButtonC open={handleDrawerToggle} />}
                hello={<Hello name={user.firstname} />}
            />
            <Aside
                drawerContainer={container}
                drawerVariant="temporary"
                drawerAnchor={theme.direction === "rtl" ? "right" : "left"}
                drawerOpen={mobileOpen}
                drawerOnClose={handleDrawerToggle}
            />
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
        display: "flex",
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
