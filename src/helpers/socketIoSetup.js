import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const io = new Server();

export const bootStrapSocketIo = (appServer) => {
  io.attach(appServer);
  io.use((socket, next) => {
      console.log('Handshake data:', socket.handshake.auth);
      const { token } = socket.handshake.auth;
      if(token){
        const authToken = jwt.verify(token, process.env.JWT_KEY);
        console.log('User ID from the token', authToken.id);
        socket.join(authToken.id);
      }
       next();
  })
  
};

export const sendDmNotification = (roomId, message) => {
    io.to(roomId).emit('notification', message);
};

