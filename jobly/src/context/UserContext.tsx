import React from "react";
import {User} from '../types/types'

/** Context: provides currentUser object and setter for it throughout app. */

const UserContext = React.createContext<any>(null);



export default UserContext;
