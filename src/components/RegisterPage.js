import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { registerAction } from "../store/actions/registerAction";
import swal from "sweetalert";
import Spinner from "./Spinner";

export default function RegisterPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const [country, setCountry] = useState("");
    const [countryReq, setCountryReq] = useState(false);
    const { loading } = useSelector((state) => state.user);

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    const classes = useStyles();

    const onSubmit = async (data) => {
        data.country = country;
        if (!country) {
            setCountryReq(true);
        } else {
            let { error, errorMsg } = await dispatch(registerAction(data));
            if (error) {
                swal({
                    title: errorMsg,
                    icon: "error",
                    buttons: "Continuar",
                });
            } else {
                history.push("/store");
            }
            setCountryReq(false);
        }
    };

    return (
        <div className={classes.container}>
            {loading ? <Spinner /> : null}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <FolderSharedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        className={classes.blueColor}
                    >
                        Registro
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputRef={register({
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido",
                                        },
                                    })}
                                    autoComplete="fname"
                                    name="firstname"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    color={"secondary"}
                                    label="Nombre"
                                    InputLabelProps={{
                                        className: classes.blueColor,
                                    }}
                                    inputProps={{
                                        className: classes.white,
                                    }}
                                />
                                <label style={{ color: "red" }}>
                                    {errors?.firstname?.message}
                                </label>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputRef={register({
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido",
                                        },
                                    })}
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    name="lastname"
                                    autoComplete="lname"
                                    color={"secondary"}
                                    InputLabelProps={{
                                        className: classes.blueColor,
                                    }}
                                    inputProps={{
                                        className: classes.white,
                                    }}
                                />
                                <label style={{ color: "red" }}>
                                    {errors?.lastname?.message}
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={register({
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido",
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "El email no es válido",
                                        },
                                    })}
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Correo electrónico"
                                    name="email"
                                    color={"secondary"}
                                    autoComplete="email"
                                    InputLabelProps={{
                                        className: classes.blueColor,
                                    }}
                                    inputProps={{
                                        className: classes.white,
                                    }}
                                />
                                <label style={{ color: "red" }}>
                                    {errors?.email?.message}
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={register({
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Tu contraseña debe tener mínimo 8 caracteres",
                                        },
                                    })}
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    color={"secondary"}
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    InputLabelProps={{
                                        className: classes.blueColor,
                                    }}
                                    inputProps={{
                                        className: classes.white,
                                    }}
                                />
                                <label style={{ color: "red" }}>
                                    {errors?.password?.message}
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={register({
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Tu contraseña debe tener mínimo 8 caracteres",
                                        },
                                        validate: (value) =>
                                            value === password.current ||
                                            "Las contraseñas deben ser iguales",
                                    })}
                                    variant="outlined"
                                    fullWidth
                                    name="c_password"
                                    label="Confirmar contraseña"
                                    type="password"
                                    id="c_password"
                                    autoComplete="confirm-password"
                                    color={"secondary"}
                                    InputLabelProps={{
                                        className: classes.blueColor,
                                    }}
                                    inputProps={{
                                        className: classes.white,
                                    }}
                                />
                                <label style={{ color: "red" }}>
                                    {errors?.c_password?.message}
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                >
                                    <InputLabel
                                        id="demo-simple-select-filled-label"
                                        className={classes.blueColor}
                                    >
                                        Seleccione su país
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={country}
                                        onChange={handleChange}
                                        inputRef={register({
                                            required: {
                                                value: true,
                                                message:
                                                    "Este campo es requerido",
                                            },
                                        })}
                                        name="country"
                                        style={{ color: "#fff" }}
                                        color={"secondary"}
                                    >
                                        <MenuItem>none</MenuItem>
                                        <MenuItem value={"Nicaragua"}>
                                            Nicaragua
                                        </MenuItem>
                                        <MenuItem value={"México"}>
                                            México
                                        </MenuItem>
                                        <MenuItem value={"Italia"}>
                                            Italia
                                        </MenuItem>
                                        <MenuItem value={"Francia"}>
                                            Francia
                                        </MenuItem>
                                    </Select>
                                    {countryReq ? (
                                        <label style={{ color: "red" }}>
                                            Este campo es obligatorio
                                        </label>
                                    ) : null}
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Registrarse
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <div className={classes.register}>
                                    <p className={classes.mr}>
                                        ¿Ya tienes cuenta?
                                    </p>
                                    <Link to="/login">
                                        <a href>Inicia sesión</a>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fe%2F8%2F1%2F331145-download-free-blue-gradient-background-1920x1080-photo.jpg&f=1&nofb=1')",
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    register: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
    },
    mr: {
        marginRight: "5px",
    },
    formControl: {
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    blueColor: {
        color: `${theme.palette.primary.light} !important`,
    },
    white: {
        color: "#fff",
    },
}));
