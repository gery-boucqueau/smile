import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";
import ChatButton from './subComponents/ChatButton';


class SideBar extends React.Component {
    state = {
        chatEnabled: false,
        message: '',
    };

    styles = {
        container: {
            height: '100vh',
            width: '30vw',
            margin: '0px',
        },
    };

    handleChatDisplay = () => {
        this.setState(prevState => ({
            chatEnabled: !prevState.chatEnabled
        }))
    };

    handleSubmit = event => {
        event.preventDefault();
        const { socket } = this.props
        socket.emit(
            'chat message',
            { 
                sender: this.props.player,
                message: this.state.message,
            }
        )
        this.setState({
            message: ''
        })
    }

    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const { chatEnabled, message } = this.state;
        const { 
            handleUserMedia, 
            chat, 
            toggleMicro, 
            toggleVideo, 
            microEnabled, 
            videoEnabled 
        } = this.props;
    
        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery />
                    <LiveChat 
                        handleSubmit={this.handleSubmit} 
                        handleMessage={this.handleMessage}
                        chatEnabled={chatEnabled}
                        chat={chat} 
                        message={message}
                    /> 
                    <MyCam 
                        mirrored={true}
                        handleUserMedia={handleUserMedia}
                        chatEnabled={chatEnabled}
                        toggleMicro={toggleMicro}
                        toggleVideo={toggleVideo}
                        microEnabled={microEnabled}
                        videoEnabled={videoEnabled}
                    />
                <ChatButton handleChatDisplay={this.handleChatDisplay} />
            </div>
        )
    };
};

export default SideBar;
