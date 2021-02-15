import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loginAction } from "../store/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Spinner from "./Spinner";

const Login = () => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        let { error, errorMsg } = await dispatch(loginAction(data));

        if (error) {
            swal({
                title: errorMsg,
                icon: "error",
                buttons: "Continuar",
            });
        } else {
            history.push("/store");
        }
    };

    return (
        <Div>
            {loading ? <Spinner /> : null}
            <Grid container>
                <Grid item xs={12}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.container}
                    >
                        <Typography variant="h4" color="initial">
                            Ingresa tu cuenta
                        </Typography>
                        <div className={classes.inputContainer}>
                            <input
                                className={classes.input}
                                type="email"
                                placeholder="Correo Electrónico"
                                name="email"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "El email no es válido",
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
                                placeholder="Contraseña"
                                name="password"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio",
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
                            value="Iniciar sesión"
                        />
                    </form>
                    <div className={classes.register}>
                        <p className={classes.mr}>¿Aún no tienes cuenta?</p>
                        <Link to="/register">Crea tu cuenta ahora</Link>
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
    },
    mr: {
        marginRight: "5px",
    },
}));

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24%;

    @media (max-width: 768px) {
        margin-top: 3%;
        padding-bottom: 50px;
    }

    @media (min-height: 1367px) {
        margin-top: 0;
    }
`;
