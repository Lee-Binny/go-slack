import React from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { BsHash } from 'react-icons/bs';

const ChannelMenu = () => {
  return (
    <>
      <ChannelHeader>
        <span className="channel-icon">
          <FaCaretDown />
        </span>
        <span className="channel-name">채널</span>
      </ChannelHeader>
      <ChannelBody>
        <ChannelList>
          <BsHash />
          <ChannelName>채널명</ChannelName>
          <MessageCount>1</MessageCount>
        </ChannelList>
      </ChannelBody>
    </>
  );
};

export const ChannelHeader = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0 16px;
  margin: 0;
  align-items: center;
  .channel-icon {
    width: 26px;
    height: 26px;
    margin: 0 4px 0 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  .channel-name {
    height: 26px;
    line-height: 26px;
    margin: 0 0 0 -4px;
    align-items: center;
  }
`;

export const ChannelBody = styled.div`
  width: 100%;
`;

const ChannelList = styled.div`
  height: 28px;
  line-height: 28px;
  padding: 0 16px 0 29px;
  display: flex;
  align-items: center;
  &:hover {
    background: rgb(256, 256, 256, 0.1);
  }
  svg {
    align-items: center;
    line-height: 28px;
    height: 28px;
    margin-right: 4px;
  }
`;

export const ChannelName = styled.span`
  margin-right: auto;
`;

export const MessageCount = styled.span`
  margin-right: 2px;
  opacity: 1;
  transition: opacity 0.1s;
  border-radius: 16px;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  height: 18px;
  line-height: 18px;
  margin-left: 4px;
  padding: 0 9px;
  background: #cd2553;
`;

export default ChannelMenu;
