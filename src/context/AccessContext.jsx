/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false); 

    const grantAccess = () => setHasAccess(true);     
    const revokeAccess = () => setHasAccess(false);     

    return (
        <AccessContext.Provider value={{ hasAccess, grantAccess, revokeAccess }}>
            {children}
        </AccessContext.Provider>
    );
};

export const useAccess = () => useContext(AccessContext);
