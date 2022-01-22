import React from 'react';
import styled from 'styled-components';
import { FaHashtag } from 'react-icons/fa';

const ChatHeader = () => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <ChannelTitle>
          <ChannelHash />
          <span>채널명1</span>
        </ChannelTitle>
      </TitleWrapper>
      <MembersWrapper>
        <MembersButton>
          <MemberList>
            <MemberIcon />
            <MemberIcon />
            <MemberIcon />
            <MemberCount>60</MemberCount>
          </MemberList>
        </MembersButton>
      </MembersWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 20px;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 0 var(--saf-0);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  height: 30px;
  align-items: center;
`;

const ChannelTitle = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 18px;
  line-height: 1.33334;
  font-weight: 900;
  span {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const ChannelHash = styled(FaHashtag)`
  margin-right: 2px;
  vertical-align: text-bottom;
  width: 0.75em;
  height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1.33334;
  font-weight: 900;
`;

const MembersWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-left: auto;
  align-items: center;
`;

const MembersButton = styled.button`
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0);
  color: rgba(var(--sk_foreground_max, 29, 28, 29), 0.7);
  padding: 3px 0 3px 3px;
  border-radius: 4px;
  height: 28px;
  margin-left: 8px;
  background: none;
  border: 0;
  font: inherit;
  margin: 0;
  line-height: inherit;
  overflow: initial;
  text-align: initial;
  vertical-align: initial;
  cursor: pointer;
`;

const MemberList = styled.div`
  align-items: center;
  display: flex;
`;

const MemberIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: blue;
  margin-right: -4px;
`;

const MemberCount = styled.span`
  font-size: 13px;
  line-height: 22px;
  padding: 0 8px 0 12px;
`;

export default ChatHeader;
