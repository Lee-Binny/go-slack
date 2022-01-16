import React from 'react';
import styled from 'styled-components';
import TopMenu from './TopMenu';
import ChannelMenu from './ChannelMenu';
import DMMenu from './DMMenu';

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarScroll>
        <TopMenu />
        <ChannelMenu />
        <DMMenu />
      </SideBarScroll>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 260px;
  height: 100%;
  background: #303e4d;
  grid-template-rows: auto;
  overflow: hidden;
  display: grid;
  color: rgb(203, 207, 211);
`;

const SideBarScroll = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  outline: none;
  height: 100%;
`;

export default SideBar;
