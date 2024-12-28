const socketModule = (io)=>{
    io.on("connection", async (socket) => {
        socket.on("join-room", (userId, roomId) => {
            socket.join(roomId);
        });
    })
}

module.exports = {
    socketModule
}