import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import people from "../../images/gente.jpg";

const useStyle = makeStyles((theme) => ({
    paragraphTitle: {
        fontSize: "37px",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
            fontSize: "28px",
        },
    },
    image: {
        width: "91%",
    },
    container: {
        marginTop: "5%",
        marginLeft: "25px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "15px",
            marginTop: "1rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0",
            textAlign: "center",
        },
    },
    paragraph: {
        fontSize: "20px",
        width: "82%",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
        },
    },
}));

const LoginInfoLeft = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Typography
                variant="body1"
                color="initial"
                className={classes.paragraphTitle}
            >
                Comprar nunca fue tan <strong>fácil</strong>
            </Typography>
            <br />
            <Typography
                variant="body1"
                color="initial"
                className={classes.paragraph}
            >
                Ahora puedes comprar tus productos sin salir de casa. Tienes un
                control de tus gastos mensuales y muchas otras cosas más.
            </Typography>
            <img src={people} alt="" className={classes.image} />
        </div>
    );
};

export default LoginInfoLeft;
