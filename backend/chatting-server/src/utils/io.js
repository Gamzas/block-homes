module.exports = (io) => {
  io.on("connection", async (socket) => {
    console.log("Client 연결 완료", socket.id);
  });
};
