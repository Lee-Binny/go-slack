import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import SearchModal from './SearchModal';

const Header = () => {
  return (
    <StyledHeader>
      <SideContainer/>
      <SearchContainer>
        <SearchButton>
          <BiSearch />
          <span>GoSlack 검색 </span>
        </SearchButton>
      </SearchContainer>
      <SideContainer>
        <ProfileButton />
      </SideContainer>
      {/*<SearchModal/>*/}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: #2c3849;
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  max-width: 732px;
  flex: 2;
`;

const SearchButton = styled.button`
  color: #ffffff;
  background: #56606e;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex: 5;
  height: 24px;
  min-width: 0;
  max-width: 732px;
  padding: 0 8px;
  border-radius: 6px;
  border: none;
  span {
    font-size: 13px;
    line-height: 1.38463;
    font-weight: 400;
    display: block;
    padding: 0 12px 0 8px;
  }
`;

const SideContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 20px;
  flex: 1;
  min-width: 128px;
  justify-content: flex-end;
`;

const ProfileButton = styled.button`
  width: 28px;
  height: 28px;
`;

export default Header;
