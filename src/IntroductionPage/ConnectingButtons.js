import React from 'react';
import ConnectingButton from './ConnectingButton';
import {useNavigate} from 'react-router-dom'

const ConnectingButtons = () => {
    const navigate = useNavigate()
    const pushToJoinRoomPage = () => {
        navigate('/join-room');
    }
    const pushToJoinPageAsHost = () => {
        navigate('/join-room?host=true')
    }
    return (
        <div className='connecting_buttons_container'>
            <ConnectingButton
                buttonText='Join a Meeting'
                onClickHandler={pushToJoinRoomPage}>
            </ConnectingButton> 
            <ConnectingButton
                buttonText='Host a Meeting'
                createRoomButton = {true}
                onClickHandler={pushToJoinPageAsHost}>
            </ConnectingButton> 
        </div>
    );
}

export default ConnectingButtons;