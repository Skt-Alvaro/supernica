import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../logo/logoletter2.png";

const useStyles = makeStyles((theme) => ({
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
    toolbar: theme.mixins.toolbar,
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={props.position} className={props.className}>
                <Toolbar>
                    {props.icon}
                    <img src={logo} className={classes.img} alt="" />
                    {props.hello}
                </Toolbar>
            </AppBar>
        </div>
    );
}
