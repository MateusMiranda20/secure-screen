/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
const [socket, setSocket] = useState(null);

useEffect(() => {
const newSocket = io('http://localhost:3001');
setSocket(newSocket);

return () => {
newSocket.disconnect();
};
}, []);

return (
<SocketContext.Provider value={socket}>
    {children}
</SocketContext.Provider>
);
};

export const useSocket = () => useContext(SocketContext);