import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Header from "./Header";
import IconButtonC from "./IconButtonC";
import Aside from "./Aside";

function StorePage(props) {
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
            />
            <Aside
                drawerContainer={container}
                drawerVariant="temporary"
                drawerAnchor={theme.direction === "rtl" ? "right" : "left"}
                drawerOpen={mobileOpen}
                drawerOnClose={handleDrawerToggle}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {/* aqui va los productos */}
            </main>
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
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
