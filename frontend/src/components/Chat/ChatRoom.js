import React from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const ChatRoom = () => {
  return (
    <ChatContainer>
      <ChatHeader />
      <ChatBody />
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  position: relative;
  min-width: 0;
  min-height: 0;
`;

export default ChatRoom;
