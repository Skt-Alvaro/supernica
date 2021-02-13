import React from "react";
import { Provider } from "react-redux";
import generateStore from "./store/store";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Store from "./components/Store";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./helpers/themeConfig";

function App() {
    const store = generateStore();
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Route exact path="/login" component={LoginPage} />
                    <Redirect from="/" to="/login" />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/register" component={RegisterPage} />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
