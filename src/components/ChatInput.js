import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useTheme, StylesProvider, makeStyles } from "@material-ui/core/styles";
import { db } from '../firebase';
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
    const muiTheme = useTheme();
    const [input, setInput] = useState("");
    console.log(channelId);
    const sendMessage = e => {
        //prevent refresh
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: "Ndyabagye Henry",
                userImage: "https://pbs.twimg.com/profile_images/1112588127431020544/WU2ClenS_400x400.jpg"
            });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    }

    return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={muiTheme}>
        <ChatInputContainer>

                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Message ${channelName}`} />
                        <Button hidden type="submit" onClick={sendMessage}>
                            SEND
                        </Button>
                    </form>
        </ChatInputContainer>
                </ThemeProvider>
            </StylesProvider>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form {
        position:relative;
        display:flex;
        justify-content: center;
    }

    >form > input{
        position: fixed;
        bottom:30px;
        border:1px solid gray;
        border-radius:3px;
        padding:20px;
        outline:none;
        ${props=>props.theme.breakpoints.up("sm")}{
            width:40%;
        }
        ${props=>props.theme.breakpoints.up("md")}{
            width:60%;
        }
        ${props=>props.theme.breakpoints.up("sm")}{
            width:60%;
        }
    }

    >form >button{
        display:none !important;
    }
`;
