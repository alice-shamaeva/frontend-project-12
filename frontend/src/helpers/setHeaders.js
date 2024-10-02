import React, { createContext, useContext } from 'react';

export const SetHeaders = createContext();

const ChatWSProvider = ({ webSocket, children }) => {
  const emitSendMessage = (message) => new Promise((resolve, reject) => {
    webSocket.timeout(1000).emit('newMessage', message, (error, response) => {
      if (response?.status === 'ok') {
        resolve(response.status);
      }
      reject(error);
    });
  });

  const emitAddChannel = (channel) => new Promise((resolve, reject) => {
    webSocket.timeout(1000).emit('newChannel', channel, (error, response) => {
      if (response?.status === 'ok') {
        resolve(response.data);
      }
      reject(error);
    });
  });

  const emitRemoveChannel = (id) => new Promise((resolve, reject) => {
    webSocket.timeout(1000).emit('removeChannel', { id }, (error, response) => {
      if (response?.status === 'ok') {
        resolve(response.status);
      }
      reject(error);
    });
  });

  const emitRenameChannel = (name, id) => new Promise((resolve, reject) => {
    webSocket.timeout(1000).emit('renameChannel', { name, id }, (error, response) => {
      if (response?.status === 'ok') {
        resolve(response.status);
      }
      reject(error);
    });
  });

  return (
    <SetHeaders.Provider value={{
      emitSendMessage, emitAddChannel, emitRemoveChannel, emitRenameChannel,
    }}
    >
      {children}
    </SetHeaders.Provider>
  );
};

const useChatWS = () => useContext(SetHeaders);

export { ChatWSProvider, useChatWS };
