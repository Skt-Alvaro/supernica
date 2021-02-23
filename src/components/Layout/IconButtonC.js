import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    width: {
        width: 0,
    },
}));

const IconButtonC = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.width}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={props.open}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
        </div>
    );
};

export default IconButtonC;
