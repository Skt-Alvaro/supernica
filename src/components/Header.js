import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../logo/logoletter2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Header(props) {
    const [header, setHeader] = useState(false);
    const classes = useStyles();

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <div className={classes.root}>
            <AppBar
                position={props.position}
                className={
                    header
                        ? `${props.className} ${classes.rootActive}`
                        : `${props.className} ${classes.root}`
                }
            >
                <Toolbar className={classes.flex}>
                    <img src={logo} className={classes.img} alt="" />
                    {props.hello}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: "transparent",
        boxShadow: "none",
        transition: "background 0.5s",
    },
    rootActive: {
        background: "#3f51b5",
        transition: "background 0.5s",
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    img: {
        maxWidth: "100%",
        height: "auto",
        [theme.breakpoints.down("xs")]: {
            margin: "0 auto",
        },
    },
    name: {
        position: "absolute",
        right: "20px",
    },
    often: theme.mixins.toolbar,
}));
