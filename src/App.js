import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
import Category from "./pages/Category";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import TermeniSiConditi from "./pages/TermeniSiConditi/TermeniSiConditi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav> */}

         
            <Switch>
              <Route
                exact={true}
                path="/"
                render={(props) => (
                  <Home {...props} />
                )}
              />
             
              <Route path='/login' component={Login} />
              <Route path="/about" component={About} />
              <Route path="/wishList" component={WishList} />
              <Route path="/register" component={Register} />
              <Route path="/termeniSiConditi" component={TermeniSiConditi} />
              <Route path="/cart" component={Cart} />
              <Route path="/product/:productId" component={Product} />
              <Route path="/category/:categoryName" component={Category} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
