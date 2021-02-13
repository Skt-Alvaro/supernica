import React from "react";
import Grid from "@material-ui/core/Grid";
import Login from "./Login";
import LoginInfoLeft from "./LoginInfoLeft";
import Header from "./Header";

const LoginPage = () => {
    return (
        <div>
            <Header />
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
