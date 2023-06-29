import React from "react";
import {User} from '../types/types'

/** Context: provides currentUser object and setter for it throughout app. */

interface UserContextType {
    currentUser: User | null,
    setCurrentUser: (user: User | null) => void
}

const UserContext = React.createContext<UserContextType>({currentUser: null, setCurrentUser: () => {} });



export default UserContext;
