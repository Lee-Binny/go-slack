import React from 'react';
import styled from 'styled-components';

const ChatMessage = () => {
  return (
    <MessageContainer>
      <AvatarWrapper>
        <AvatarButton>
          <AvatarImage src="https://ca.slack-edge.com/TFKDZJ6MS-UFLLXUVC2-g92f3d2f5814-48" />
        </AvatarButton>
      </AvatarWrapper>
      <MessageContent>
        <ContentName>이름</ContentName>
        <ContentTime>오후 12:00</ContentTime>
        <ContentTextArea>
          <div>
            테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다.
            테스트입니다. 테스트입니다.
          </div>
        </ContentTextArea>
      </MessageContent>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  padding: 8px 20px;
  display: flex;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
  display: flex;
`;

const AvatarButton = styled.button`
  width: 36px;
  height: 36px;
  position: relative;
  display: inline-block;
  outline: none;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
`;

const AvatarImage = styled.img`
  width: 36px;
  height: 36px;
`;

const MessageContent = styled.div`
  flex: 1 1 0;
  min-width: 0;
  padding: 8px;
  padding-left: 16px;
  margin: -8px -8px -16px -16px;
`;

const ContentName = styled.span`
  font-weight: 900;
  font-size: 15px;
  margin-right: 6px;
  line-height: 1.46668;
`;

const ContentTime = styled.span`
  color: #858585;
  font-size: 12px;
`;

const ContentTextArea = styled.div`
  width: 100%;
  max-width: none;
  margin-bottom: 4px;
  font-size: 15px;
  line-height: 1.46668;
`;

export default ChatMessage;
