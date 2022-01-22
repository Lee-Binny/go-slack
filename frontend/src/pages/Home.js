import React from 'react';
import styled from 'styled-components';
import Header from '../components/Home/Header';
import SideBar from '../components/SideBar/SideBar';
import ChatRoom from '../components/Chat/ChatRoom';

const Home = () => {
  return (
    <div>
      <Header />
      <WorkSpaceContainer>
        <SideBar />
        <ChatRoom />
      </WorkSpaceContainer>
    </div>
  );
};

const WorkSpaceContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  overflow: hidden;
  position: relative;
  grid-template-columns: 260px auto;
  height: 100%;
`;

export default Home;
