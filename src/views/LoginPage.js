import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Login from "../components/Forms/Login";
import LoginInfoLeft from "../components/Login/LoginInfoLeft";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { headerAction } from "../store/actions/headerAction";

const LoginPage = () => {
    const dispatch = useDispatch();
    const classes = useStyle();

    useEffect(() => {
        const propertys = {
            position: "relative",
            backgroundChange: false,
        };
        dispatch(headerAction(propertys));
    }, []);

    return (
        <div className={`${classes.root} ${classes.color}`}>
            <Grid container className={classes.container}>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                    <LoginInfoLeft />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                    <Login />
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginPage;

const useStyle = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            height: "100vh",
        },
    },
    container: {
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            height: "80vh",
        },
    },
    color: {
        background: "#15161A",
    },
}));
