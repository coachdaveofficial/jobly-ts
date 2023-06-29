import React, { useContext } from "react";
import { Navigate, useParams, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

/** 
 * 
 * Use <PrivateRoute> as such: <Route element={<PrivateRoute component={ComponentGoesHere} />}
 * Use in order to require a user to be logged-in before access a specific route.
 * 
 */

interface Props {
    component: React.ComponentType;
    path?: string;
    additionalProps?: any;
  }

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, additionalProps}) => {
    const {currentUser} = useContext(UserContext);
    const {handle} = useParams();

    console.debug("PrivateRoute", "currentUser=", currentUser);
    let props;
    handle ? props = { ...additionalProps, handle } : props = {...additionalProps}

    return currentUser ? <RouteComponent {...props} /> : <Navigate to={"/login"} />
}

