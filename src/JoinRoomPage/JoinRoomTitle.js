import React from 'react';

const JoinRoomPageTitle = ({ isRoomHost }) => {
    const titleText = isRoomHost ? 'Host meeting' : 'Join meeting';
    return (
        <div className='join_room_title'>
           {titleText} 
        </div>
    );
};
export default JoinRoomPageTitle;