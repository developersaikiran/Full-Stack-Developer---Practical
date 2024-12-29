import { createContext } from "react";
import { constant } from "../config/constants";
import { io } from "socket.io-client";
const URL = constant.URL.socket

export const socket = io(URL, {
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempt: 2,
}).connect();
console.log(socket,":socket-connection")

export const SocketContext = createContext();
const SocketProvider = ({children}) => {
    return (
        <SocketContext.Provider
            value={{
                socket
            }}
        >
            {children}
        </SocketContext.Provider>
    )
};
export default SocketProvider 