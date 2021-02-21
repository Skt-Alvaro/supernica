import React from "react";
import Grid from "@material-ui/core/Grid";
import Login from "./Login";
import LoginInfoLeft from "./LoginInfoLeft";
import Header from "../Header";
import { makeStyles } from "@material-ui/core";

const LoginPage = () => {
    const classes = useStyle();
    return (
        <div>
            <Header position="relative" color={classes.root} />
            <Grid container>
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

const useStyle = makeStyles({
    root: {
        background: "#15161A",
    },
});
