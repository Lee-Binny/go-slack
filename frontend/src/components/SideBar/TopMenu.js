import React from 'react';
import styled from 'styled-components';
import { BiChevronDown, BiEdit } from 'react-icons/bi';
import {
  IoChatbubbleEllipsesOutline,
  IoChatbubblesOutline,
  IoAt,
  IoBookmarkOutline,
} from 'react-icons/io5';

const TopMenu = () => {
  return (
    <>
      <SideBarHeader>
        <HeaderButtonContainer>
          <TitleButton>
            <span>GoSlack</span>
            <BiChevronDown />
          </TitleButton>
          <WriteButton>
            <BiEdit />
          </WriteButton>
        </HeaderButtonContainer>
      </SideBarHeader>
      <SideBarBody>
        <MenuList>
          <Menu>
            <IoChatbubbleEllipsesOutline />
            <span>스레드</span>
          </Menu>
          <Menu>
            <IoChatbubblesOutline />
            <span>모든 DM</span>
          </Menu>
          <Menu>
            <IoAt />
            <span>맨션 및 반응</span>
          </Menu>
          <Menu>
            <IoBookmarkOutline />
            <span>저장된 항목</span>
          </Menu>
        </MenuList>
      </SideBarBody>
    </>
  );
};

const SideBarHeader = styled.div`
  height: 50px;
  font-size: 18px;
  line-height: 1.33334;
  font-weight: 900;
  color: #fff;
  display: flex;
  border-top: 1px solid #44515f;
  border-bottom: 1px solid #44515f;
  &:hover {
    background: rgb(256, 256, 256, 0.1);
  }
`;

const HeaderButtonContainer = styled.div`
  padding-right: 54px;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 0 19px 0 16px;
  transition-property: background-color, border-color;
  transition-duration: 80ms;
  transition-timing-function: cubic-bezier(0.36, 0.19, 0.29, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-clip: padding-box;
  position: relative;
  z-index: 1;
  flex-direction: row-reverse;
`;

const TitleButton = styled.button`
  flex: 1;
  outline: none;
  padding-right: 54px;
  display: flex;
  align-items: center;
  max-width: 100%;
  padding-left: 4px;
  margin-left: -4px;
  border-color: rgba(0, 0, 0, 0.15);
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  line-height: inherit;
  overflow: initial;
  padding: 0;
  text-align: initial;
  vertical-align: initial;
  cursor: pointer;
  span {
    font-weight: 900;
  }
`;

const WriteButton = styled.button`
  height: 34px;
  width: 34px;
  top: 8px;
  bottom: 24px;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 16px;
  background: #fff;
  border-radius: 18px;
  border: 0;
  svg {
    position: relative;
    display: inline-flex;
    width: 20px;
    height: 20px;
    padding: 6px 0;
  }
`;

const SideBarBody = styled.div`
  height: auto;
  min-height: 0;
  width: 100%;
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Menu = styled.li`
  height: 28px;
  line-height: 28px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  svg {
    font-size: 18px;
    width: 26px;
    margin: 0 0 0 -2px;
    vertical-align: middle;
  }
  span {
    font-size: 15px;
  }
  &:hover {
    background: rgb(256, 256, 256, 0.1);
  }
`;

export default TopMenu;
