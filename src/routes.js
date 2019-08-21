import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./login";
import { Notes } from "./notes";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/notes" component={Notes} />
    </div>
  );
};

export {Routes};
