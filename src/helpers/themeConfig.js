import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3f51b5",
            light: "#99E6F2",
        },
        secondary: {
            main: "#F8BBF7",
        },
        text: {
            secondary: "#fff",
        },
    },
    breakpoints: {
        laptopL: 1440,
    },
});

export default theme;
//blue #99E6F2
