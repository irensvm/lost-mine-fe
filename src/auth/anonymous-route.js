import React from "react";
import { Route, Redirect } from "react-router-dom";

const anonymousRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} loggedInUser={user} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/profile", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default anonymousRoute;
