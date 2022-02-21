import axios from "axios";

export const checkIfRoomExists = async (roomId) => {
  const url = `https://video-app-8582-dev.twil.io/room-exists?roomId=${roomId}`;
  const config = {
   url,
   method: 'get',
   headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}
  const response = await axios(config);

  return response.data.roomExists;
};
