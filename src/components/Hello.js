import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hello = (props) => {
    const { token } = useSelector((state) => state.user);
    const classes = useStyle();
    return (
        <div>
            <Hidden xsDown>
                <Typography
                    align=""
                    variant="h6"
                    color="initial"
                    className={classes.name}
                >
                    {token ? (
                        `Hola, ${props.name}`
                    ) : (
                        <Link to="/login" className={classes.link}>
                            <a>Inicia sesión</a>
                        </Link>
                    )}
                </Typography>
            </Hidden>
        </div>
    );
};

export default Hello;

const useStyle = makeStyles({
    name: {
        position: "absolute",
        top: "17px",
        right: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});
