import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../logo/logoletter2.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        [theme.breakpoints.down("sm")]: {
            margin: "0 auto",
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();
    console.log(props);

    return (
        <div className={classes.root}>
            <AppBar position={props.position} className={props.className}>
                <Toolbar>
                    {props.icon}
                    <img src={logo} className={classes.img} alt="" />
                </Toolbar>
            </AppBar>
        </div>
    );
}
