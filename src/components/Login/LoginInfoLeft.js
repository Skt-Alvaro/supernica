import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const LoginInfoLeft = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Typography
                variant="body1"
                color="initial"
                className={classes.paragraphTitle}
            >
                Buy never was to <strong>easy</strong>
            </Typography>
            <br />
            <Typography
                variant="body1"
                color="initial"
                className={classes.paragraph}
            >
                Now you can buy your products without getting out of your house.
                You have a control of your mensual payments and so many things
                more.
            </Typography>
            <img
                src={
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F7460.jpg&f=1&nofb=1"
                }
                alt=""
                className={classes.image}
            />
        </div>
    );
};

export default LoginInfoLeft;

const useStyle = makeStyles((theme) => ({
    paragraphTitle: {
        fontSize: "37px",
        color: "#fff",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
            fontSize: "28px",
        },
    },
    image: {
        width: "91%",
        marginTop: "15px",
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
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            fontSize: "15px",
            textAlign: "center",
            width: "100%",
            padding: "0px 20px 0px 20px",
        },
    },
}));
