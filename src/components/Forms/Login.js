import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Login = (data) => {
    const classes = useStyle();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {};

    return (
        <Div>
            <Grid container>
                <Grid item xs={12}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.container}
                    >
                        <Typography variant="h4" color="textSecondary">
                            Enter your account
                        </Typography>
                        <div className={classes.inputContainer}>
                            <input
                                className={classes.input}
                                type="email"
                                placeholder="Email"
                                name="email"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "The email isn't valid",
                                    },
                                })}
                            />
                            <label style={{ color: "red", fontSize: "13px" }}>
                                {errors?.email?.message}
                            </label>
                        </div>
                        <div className={classes.inputContainer}>
                            <input
                                className={classes.input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            />
                            <label style={{ color: "red", fontSize: "13px" }}>
                                {errors?.password?.message}
                            </label>
                        </div>
                        <input
                            className={classes.button}
                            type="submit"
                            value="Log In"
                        />
                    </form>
                    <div className={classes.register}>
                        <Typography
                            className={classes.mr}
                            variant="body1"
                            color="textSecondary"
                        >
                            You don't have an accout?
                        </Typography>
                        <Link className={classes.registerLink} to="/register">
                            Sign In
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Div>
    );
};

export default Login;

const useStyle = makeStyles((theme) => ({
    container: {
        textAlign: "center",
    },
    input: {
        width: "100%",
        padding: "17px 20px",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        fontSize: "15px",
    },
    button: {
        fontSize: "25px",
        background: theme.palette.primary.main,
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
        width: "75%",
        padding: "7px",
    },
    inputContainer: {
        width: "75%",
        textAlign: "left",
        marginTop: "20px",
        margin: "0 auto",
    },
    register: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            textAlign: "center",
        },
    },
    mr: {
        marginRight: "5px",
    },
    registerLink: {
        color: theme.palette.primary.main,
    },
}));

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12%;

    @media (max-width: 768px) {
        margin-top: 3%;
        padding-bottom: 50px;
    }

    @media (min-height: 1367px) {
        margin-top: 0;
    }
`;
