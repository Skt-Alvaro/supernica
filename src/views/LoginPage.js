import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Login from "../components/Forms/Login";
import LoginInfoLeft from "../components/Login/LoginInfoLeft";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { headerAction } from "../store/actions/headerAction";
import { loginAction } from "../store/actions/loginAction";
import Spinner from "../components/Layout/Spinner";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const propertys = {
    position: "relative",
    backgroundChange: false,
    show_right_items: false,
};

const LoginPage = () => {
    const history = useHistory();
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const classes = useStyle();

    const getUserInfo = async (props) => {
        let { error, errorMsg } = await dispatch(loginAction(props));

        if (error) {
            swal({
                title: errorMsg,
                icon: "error",
                buttons: "Continuar",
            });
        } else {
            history.push("/");
        }
    };

    useEffect(() => {
        dispatch(headerAction(propertys));
    }, []);

    return (
        <div className={`${classes.root} ${classes.color}`}>
            <Grid container className={classes.container}>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                    <LoginInfoLeft />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6}>
                    <Login getUserInfo={getUserInfo} />
                </Grid>
            </Grid>
            {loading ? <Spinner /> : null}
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
