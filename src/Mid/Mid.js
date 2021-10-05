import { Fragment } from "react";
import { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import Header from "../Header/Header";
// import Admin from "./Admin";
// import Home from "./Home";
// import LandingPage from "./LandingPage";
// import MovieInsert from "./MovieInsert";
// import Movies from "./Movies";
// import MovieSingle from "./MovieSingle";
// import Series from "./Series";
// import Update from "./Update";
// import UserProfile from "./UserProfile";

class Mid extends Component{
    render() {
        return (
          <>
            {/* <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/update/:idd" component={Update} />
            <Route path="/movie/:id"  component={MovieSingle} />
            <Route path="/movieinsert" component={MovieInsert} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/admin" component={Admin} /> */}

            {/* <Switch>
              <Route path="/admin" component={Admin} />
              <Fragment>
                <Header />
                <Route path="/" exact component={LandingPage} />
                <Route path="/home" component={Home} />
                <Route path="/movies" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/update/:idd" component={Update} />
                <Route path="/movie/:id" component={MovieSingle} />
                <Route path="/movieinsert" component={MovieInsert} />
                <Route path="/userprofile" component={UserProfile} />
              </Fragment>
            </Switch> */}
          </>
        );
    }
}

export default Mid;
