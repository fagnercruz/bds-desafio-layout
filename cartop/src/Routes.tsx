import Navbar from "components/Navbar";
import Catalogo from "pages/Catalogo";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/catalogo">
                    <Catalogo />
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;