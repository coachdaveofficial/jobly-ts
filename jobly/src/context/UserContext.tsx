import React from "react";
import {User} from '../types/types'

/** Context: provides currentUser object and setter for it throughout app. */

interface UserContextType {
    currentUser: User | null
}

const UserContext = React.createContext<UserContextType>({currentUser: null});



export default UserContext;
