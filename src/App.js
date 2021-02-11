import React from "react";
import { Provider } from "react-redux";
import ShopInfo from "./components/ShopInfo";
import generateStore from "./store/store";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";

function App() {
    const store = generateStore();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/login" component={ShopInfo} />
                <Route exact path="/store" component={Store} />
                <Redirect from="/" to="/login" />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
