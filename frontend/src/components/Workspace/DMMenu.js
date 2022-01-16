import React from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { ChannelBody, ChannelHeader } from './ChannelMenu';

const DMMenu = () => {
  return (
    <>
      <ChannelHeader>
        <span className="channel-icon">
          <FaCaretDown />
        </span>
        <span className="channel-name">다이렉트 메세지</span>
      </ChannelHeader>
      <ChannelBody>
        <DMlList>
          <span className="avatar">
            <img src="" />
          </span>
          <span className="name">테스트</span>
        </DMlList>
      </ChannelBody>
    </>
  );
};

const DMlList = styled.div`
  height: 28px;
  line-height: 28px;
  padding-left: 29px;
  display: flex;
  align-items: center;
  &:hover {
    background: rgb(256, 256, 256, 0.1);
  }
  .avatar {
    align-items: center;
    line-height: 20px;
    height: 20px;
    margin-right: 4px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .name {
    height: 20px;
    line-height: 20px;
  }
`;

export default DMMenu;
