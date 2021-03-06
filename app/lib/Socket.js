import Socket from 'socket.io-client';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

Socket.create = (path) => {
  return Socket.connect(`${config.socketBaseUrl}${path}`, {autoConnect: false, query: {accessToken: SessionStore.getAccessToken()}});
};

export default Socket;
