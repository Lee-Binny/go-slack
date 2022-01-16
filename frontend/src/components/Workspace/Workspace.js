import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

const Workspace = () => {
  return (
    <WorkspaceContainer>
      <SideBar/>
    </WorkspaceContainer>
  )
}

const WorkspaceContainer = styled.div`
  display: grid;
    grid-template-rows: auto;
    overflow: hidden;
    position: relative;
    height: 100%;
`;

export default Workspace;