import { Server } from 'socket.io';
import http from 'http';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer();
const io = new Server();

export const bootStrapSocketIo = (app) => {
  io.attach(server);
  io.on('connection', (socket) => {
    console.log('Handshake data:', socket.handshake.auth);
    const { token } = socket.handshake.auth;
    const authToken = jwt.verify(token, process.env.JWT_KEY);
    console.log('User ID from the token', authToken.id);
    socket.join(authToken.id);
  });
};

export const sendDmNotification = (roomId, event) => {
    io.to(roomId).emit(event);
};

