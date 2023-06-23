import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** 
 * 
 * Use <PrivateRoute> as such: <Route element={<PrivateRoute component={ComponentGoesHere} />}
 * Use in order to require a user to be logged-in before access a specific route.
 * 
 */

interface Props {
    component: React.ComponentType;
    path?: string;
  }

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const currentUser = useContext(UserContext);

    console.debug("PrivateRoute", "currentUser=", currentUser);


    return currentUser ? <RouteComponent /> : <Navigate to={"/login"} />
}

