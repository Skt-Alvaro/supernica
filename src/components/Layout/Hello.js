import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

const Hello = (props) => {
    const classes = useStyle();
    return (
        <div>
            <Typography variant="h6" color="initial" className={classes.name}>
                {props.name ? (
                    `Hi, ${props?.name}`
                ) : (
                    <div className={classes.items}>
                        <div>
                            <Link to="/login" className={classes.link}>
                                <Button
                                    color="secondary"
                                    className={classes.link}
                                >
                                    Log In
                                </Button>
                            </Link>
                        </div>
                        <div className={classes.cart}>
                            <Link to="/d" className={classes.link}>
                                <ShoppingCartIcon />
                            </Link>
                        </div>
                    </div>
                )}
            </Typography>
        </div>
    );
};

export default Hello;

const useStyle = makeStyles((theme) => ({
    items: {
        display: "flex",
        marginTop: "2px",
    },
    cart: {
        marginTop: "5px",
        marginLeft: "25px",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5px",
            marginLeft: "10px",
        },
    },
    link: {
        textDecoration: "none",
        color: "#fff",
    },
}));
