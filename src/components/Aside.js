import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import ForwardIcon from "@material-ui/icons/Forward";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Aside(props) {
    const [log, setLog] = useState("Iniciar sesión");
    const [icon, setIcon] = useState(<ForwardIcon />);
    const { token } = useSelector((state) => state.user);
    const classes = useStyles();

    useEffect(() => {
        if (token) {
            setLog("Cerrar sesión");
            setIcon(<ExitToAppIcon />);
        }
    }, [token]);

    const asideMethods = [
        {
            method: "Mi cuenta",
            icon: <AccountBoxIcon />,
            url: "/my-account",
        },
        {
            method: "Mis productos favoritos",
            icon: <FavoriteIcon />,
            url: "/favorite-products",
        },
        {
            method: "Mis compras",
            icon: <ShoppingBasketIcon />,
            url: "/my-shopping",
        },
        {
            method: log,
            icon: icon,
            url: "/login",
        },
    ];

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {asideMethods.map((methods, i) => {
                    return (
                        <ListItem
                            button
                            key={i}
                            component={Link}
                            to={methods.url}
                        >
                            <ListItemIcon>{methods.icon}</ListItemIcon>
                            <ListItemText primary={methods.method} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={props.drawerContainer}
                        variant={props.drawerVariant}
                        anchor={props.drawerAnchor}
                        open={props.drawerOpen}
                        onClose={props.drawerOnClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

Aside.propTypes = {
    window: PropTypes.func,
};

export default Aside;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));
