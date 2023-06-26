import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function AuthRedirect(redirectPath: string) {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        function redirectToPath() {
            if (currentUser) {
                // Redirect to the specified path
                navigate(redirectPath);
            }
        }
        redirectToPath();
        
    }, [currentUser, redirectPath]);
}


